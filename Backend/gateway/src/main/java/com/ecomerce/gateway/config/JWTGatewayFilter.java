package com.ecomerce.gateway.config;

import com.ecomerce.gateway.service.jwt.JWTInterface;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTGatewayFilter {
    private static JWTInterface jwtService = null;
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public JWTGatewayFilter(JWTInterface jwtService) {
        JWTGatewayFilter.jwtService = jwtService;
    }

    public static Mono<Void> jwtAuthorization(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            if (!jwtService.validateToken(token)) {
                return handleUnauthorizeException(exchange, new RuntimeException("Invalid JWT token"));
            }
        } else {
            return handleUnauthorizeException(exchange, new RuntimeException("Missing or invalid Authorization header"));
        }
        return chain.filter(exchange);
    }

    private static Mono<Void> handleUnauthorizeException(ServerWebExchange exchange, Throwable ex) {
        if (exchange.getResponse().isCommitted()) {
            return Mono.error(ex);
        }

        exchange.getResponse().getHeaders().setContentType(MediaType.APPLICATION_JSON);
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);

        Map<String, Object> errorAttributes = new HashMap<>();
        errorAttributes.put("status", HttpStatus.UNAUTHORIZED.value());
        errorAttributes.put("error", "Unauthorized");
        errorAttributes.put("message", ex.getMessage());
        errorAttributes.put("path", exchange.getRequest().getPath().value());

        byte[] bytes;
        try {
            bytes = objectMapper.writeValueAsBytes(errorAttributes);
        } catch (Exception e) {
            bytes = ("{\"message\":\"Unexpected error\"}").getBytes(StandardCharsets.UTF_8);
        }

        DataBuffer buffer = exchange.getResponse().bufferFactory().wrap(bytes);
        return exchange.getResponse().writeWith(Mono.just(buffer));
    }
}
