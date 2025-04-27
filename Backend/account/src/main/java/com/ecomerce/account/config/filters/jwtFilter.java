package com.ecomerce.account.config.filters;


import com.ecomerce.account.service.JWTGenerator;
import com.ecomerce.account.service.impl.CustomUserDetailsService;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

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
        if (checkValidAccessToken(request)) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        if (authenticateWithRefreshToken(request, (HttpServletResponse) servletResponse)) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        SecurityContextHolder.clearContext();
        setThrowException(servletRequest, (HttpServletResponse) servletResponse, "Unauthorized");
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

    private boolean checkValidAccessToken(HttpServletRequest request) {
        String accessToken = jwtGenerator.resolveToken(request, "accessToken");
        if (accessToken == null || !jwtGenerator.isValidToken(accessToken)) {
            return false;
        }
        setAuthentication(accessToken);
        return false;
    }

    private boolean authenticateWithRefreshToken(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = jwtGenerator.resolveToken(request, "refreshToken");
        if (refreshToken != null && jwtGenerator.isValidToken(refreshToken)) {
            String username = jwtGenerator.getUsernameFromToken(refreshToken);
            String role     = jwtGenerator.getRoleFromToken(refreshToken);

            String newAccessToken  = jwtGenerator.generateToken(username, role);
            String newRefreshToken = jwtGenerator.generateRefeshToken(username, role);

            setAuthentication(newAccessToken);

            response.addHeader("Set-Cookie", "accessToken=" + newAccessToken + "; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=900");
            response.addHeader("Set-Cookie", "refreshToken=" + newRefreshToken + "; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=604800");
            return true;
        }
        return false;
    }

    private void setAuthentication(String token) {
        String username = jwtGenerator.getUsernameFromToken(token);

        var authorities = userDetailsService.loadUserByUsername(username);
        var authentication = new
                UsernamePasswordAuthenticationToken(
                authorities,
                null,
                authorities.getAuthorities()
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
