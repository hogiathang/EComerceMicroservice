package com.ecomerce.account.config;

import com.ecomerce.account.config.filters.jwtFilter;
import com.ecomerce.account.service.JWTGenerator;
import com.ecomerce.account.service.impl.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    private final CustomUserDetailsService userDetailsService;
    private final JWTGenerator jwtGenerator;

    public SecurityConfiguration(CustomUserDetailsService userDetailsService, JWTGenerator jwtGenerator) {
        this.userDetailsService = userDetailsService;
        this.jwtGenerator = jwtGenerator;
    }

    @Bean
    public SecurityFilterChain doFilterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/v1/account/register", "/api/v1/account/login").permitAll()
                        .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .rememberMe(rememberMe -> rememberMe
                        .key("uniqueAndSecret")
                        .tokenValiditySeconds(86400)
                )
                .addFilterAfter(
                        new jwtFilter(
                                userDetailsService,
                                jwtGenerator
                        ),
                        UsernamePasswordAuthenticationFilter.class
                )
                .getOrBuild();
    }
}
