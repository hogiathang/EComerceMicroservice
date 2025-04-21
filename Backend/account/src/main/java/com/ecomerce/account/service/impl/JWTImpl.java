package com.ecomerce.account.service.impl;

import com.ecomerce.account.service.JWTGenerator;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.BadRequestException;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
public class JWTImpl implements JWTGenerator {
    private static final String SIGNATURE = "your-very-secure-secret-key-should-be-long-enough";
    private static final int EXPIRATION_TIME = 3600000;
    private static final int REFRESH_EXPIRATION_TIME = 604800000;

    @Override
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .subject(username)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(Date.from(Instant.now().plus(EXPIRATION_TIME, ChronoUnit.MILLIS)))
                .signWith(getSigningKey(), Jwts.SIG.HS256)
                .compact();
    }

    @Override
    public String generateRefeshToken(String username, String role) {
        return Jwts.builder()
                .subject(username)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(Date.from(Instant.now().plus(REFRESH_EXPIRATION_TIME, ChronoUnit.MILLIS)))
                .signWith(getSigningKey(), Jwts.SIG.HS256)
                .compact();
    }

    @Override
    public String getRoleFromToken(String token) {
        try {
            Claims claims = Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            String role = claims.get("role", String.class);

            if (role == null) {
                throw new BadRequestException("Role not found in the token");
            }

            return role;

        } catch (JwtException | IllegalArgumentException e) {
            throw new BadRequestException("Invalid JWT token or role not found", e);
        }
    }

    @Override
    public String getUsernameFromToken(String token) {
        try {
            Claims claims = Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            return claims.getSubject();
        } catch (JwtException | IllegalArgumentException e) {
            throw new BadRequestException("Invalid JWT token", e);
        }
    }

    @Override
    public Boolean isValidToken(String token) {

        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .isSigned(token);
    }

    @Override
    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(SIGNATURE.getBytes(StandardCharsets.UTF_8));
    }
}
