package com.ecomerce.authService.service.jwt.impl;

import com.ecomerce.authService.service.jwt.JWTInterface;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service("jwt-generator-service")
public class JWTImplementation implements JWTInterface {
    private final String jwt_alg;
    private final Key jwt_signature;
    private final String jwt_access_ttl;
    private final String jwt_refresh_ttl;

    @Override
    public String generateAccessToken(String userId, String username, List<String> roles) {
        long jwtAccessTtl = this.getJwtTtl(jwt_access_ttl);
        SignatureAlgorithm signatureAlgorithm = this.getSignatureAlgorithm();

        return Jwts.builder()
                .setSubject(userId)
                .claim("username", username)
                .addClaims(Map.of("roles", roles))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtAccessTtl))
                .signWith(jwt_signature, signatureAlgorithm)
                .compact();
    }

    @Override
    public String generateRefreshToken(String userId, String username, List<String> roles) {
        long jwtRefreshTtl = this.getJwtTtl(jwt_refresh_ttl);
        SignatureAlgorithm signatureAlgorithm = this.getSignatureAlgorithm();

        return Jwts.builder()
                .setSubject(userId)
                .claim("username", username)
                .addClaims(Map.of("roles", roles))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtRefreshTtl))
                .signWith(jwt_signature, signatureAlgorithm)
                .compact();
    }

    @Override
    public String refreshToken(String token) {
        Jws<Claims> parser = Jwts.parserBuilder().setSigningKey(jwt_signature).build().parseClaimsJws(token);
        return Jwts.builder()
                .setSubject(parser.getBody().getSubject())
                .claim("username", parser.getBody().get("username"))
                .addClaims(Map.of("roles", parser.getBody().get("roles")))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + getJwtTtl(jwt_access_ttl)))
                .signWith(jwt_signature, getSignatureAlgorithm())
                .compact();
    }

    @Override
    public String getNameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(jwt_signature)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("username", String.class);
    }

    private long getJwtTtl(String ttl) {
        return switch (ttl) {
            case "IN_HOUR" -> 60 * 60 * 1000;
            case "IN_DAY" -> 24 * 60 * 60 * 1000;
            case "IN_WEEK" -> 7 * 24 * 60 * 60 * 1000;
            default -> 30L * 24 * 60 * 60 * 1000;
        };
    }

    private SignatureAlgorithm getSignatureAlgorithm() {
        return switch (jwt_alg) {
            case "HS256" -> SignatureAlgorithm.HS256;
            case "HS384" -> SignatureAlgorithm.HS384;
            case "HS512" -> SignatureAlgorithm.HS512;
            default -> SignatureAlgorithm.NONE;
        };
    }

    public JWTImplementation(
            @Value("${jwt.secret}") String jwtSecret,
            @Value("${jwt.algorithm}") String jwtAlgorithm,
            @Value("${jwt.access.ttl}") String jwtAccessTtl,
            @Value("${jwt.refresh.ttl}") String jwtRefreshTtl
    ) {
        this.jwt_signature = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
        this.jwt_alg = jwtAlgorithm;
        this.jwt_access_ttl = jwtAccessTtl;
        this.jwt_refresh_ttl = jwtRefreshTtl;
    }
}
