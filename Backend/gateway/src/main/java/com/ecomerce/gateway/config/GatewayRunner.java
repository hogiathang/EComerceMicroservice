package com.ecomerce.gateway.config;

import com.ecomerce.gateway.service.jwt.JWTInterface;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDateTime;

@Configuration
public class GatewayRunner {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(p-> p
                        .path("/auth/**")
                        .filters(f -> f
//                                .filter(JWTGatewayFilter::jwtAuthorization)
                                .rewritePath("/auth/(?<segment>.*)", "/api/v1/auth/${segment}")
                                .addRequestHeader("X-Response-Header", LocalDateTime.now().toString())
                        )
                        .uri("lb://auth-service"))
                .route(p-> p
                        .path("/customer/**")
                        .filters(f -> f
                                .rewritePath("/customer/(?<segment>.*)", "/api/v1/customer/${segment}")
                                .addRequestHeader("X-Response-Header", LocalDateTime.now().toString())
                        )
                        .uri("lb://customer-service"))
                .build();
    }
}
