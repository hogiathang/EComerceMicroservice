package com.ecomerce.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.route.RouteLocator;

import java.time.LocalDateTime;

@SpringBootApplication
@EnableDiscoveryClient
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(p-> p
						.path("/account/**")
						.filters(f -> f
								.rewritePath("/account/(?<segment>.*)", "/api/v1/account/${segment}")
								.addRequestHeader("X-Response-Header", LocalDateTime.now().toString())
						)
						.uri("lb://user-service"))

				.route(p-> p
						.path("/register", "/login", "/logout")
						.filters(f-> f
								.rewritePath("/register", "/api/v1/account/register")
								.rewritePath("/login", "/api/v1/account/login")
								.rewritePath("/logout", "/api/v1/account/logout"))
						.uri("lb://user-service"))
				.build();
	}
}
