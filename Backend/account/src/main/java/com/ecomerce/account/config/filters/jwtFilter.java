package com.ecomerce.account.config.filters;


import com.ecomerce.account.service.JWTGenerator;
import com.ecomerce.account.service.impl.CustomUserDetailsService;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.io.IOException;
import java.util.Date;
import java.util.Set;

public class jwtFilter implements Filter {
    private final CustomUserDetailsService userDetailsService;
    private final JWTGenerator jwtGenerator;
    private Set<String> allowedUrls = Set.of(
            "/api/v1/account/register",
            "/api/v1/account/login"
    );
    public jwtFilter(CustomUserDetailsService userDetailsService, JWTGenerator jwtGenerator) {
        this.userDetailsService = userDetailsService;
        this.jwtGenerator = jwtGenerator;
    }

    @Override
    public void doFilter(
            ServletRequest servletRequest,
            ServletResponse servletResponse,
            FilterChain filterChain)
            throws IOException, ServletException {

        if (!(servletRequest instanceof HttpServletRequest request)) {
            setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Invalid request");
            return;
        }

        if (allowedUrls.contains(request.getRequestURI())) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        String token = jwtGenerator.resolveToken(request, "accessToken");
        try {
            if (token != null && jwtGenerator.isValidToken(token)) {
                String username = jwtGenerator.getUsernameFromToken(token);
                try {
                    var userDetails = userDetailsService.loadUserByUsername(username);
                    if (userDetails != null) {
                        var authentication = new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities());
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                } catch (Exception e) {
                    SecurityContextHolder.clearContext();
                    setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Cannot authenticate user");
                    return;
                }
            } else if(token != null) {
                String refreshToken = jwtGenerator.resolveToken(request, "refreshToken");
                if (refreshToken != null && jwtGenerator.isValidToken(refreshToken)) {
                    String username = jwtGenerator.getUsernameFromToken(refreshToken);
                    String role     = jwtGenerator.getRoleFromToken(refreshToken);
                    String newAccessToken = jwtGenerator.generateToken(username, role);
                    String newRefreshToken = jwtGenerator.generateRefeshToken(username, role);

//                    System.out.println("Old access token: " + token);
//                    System.out.println("New access token: " + newAccessToken);

                    var userDetails = userDetailsService.loadUserByUsername(username);
                    if (userDetails != null) {
                        var authentication = new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities());
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                        ((HttpServletResponse) servletResponse).addHeader("Set-Cookie", "accessToken=" + newAccessToken + "; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=604800");
                        ((HttpServletResponse) servletResponse).addHeader("Set-Cookie", "refreshToken=" + newRefreshToken + "; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=604800");
                    } else {
                        SecurityContextHolder.clearContext();
                        setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Cannot authenticate user");
                        return;
                    }
                } else {
                    SecurityContextHolder.clearContext();
                    setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Invalid JWT token");
                    return;
                }
            }
        } catch (Exception e) {
            SecurityContextHolder.clearContext();
            setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Invalid JWT token");
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    private void setThrowException(ServletRequest request, HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("WWW-Authenticate", "Bearer realm=\"\"");
        response.setHeader("Content-Type", "application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        String jsonResponse = "{ \"apiPath\": \"" + request.getServletContext().getContextPath() + "\", " +
                "\"serviceName\": \"" + "Account Service" + "\", " +
                "\"message\": \"" + message + "\", " +
                "\"status\": " + "UNAUTHORIZED" + ", " +
                "\"timestamp\": " + new Date().toString() + " }";

        response.getWriter().write(jsonResponse);
    }
}
