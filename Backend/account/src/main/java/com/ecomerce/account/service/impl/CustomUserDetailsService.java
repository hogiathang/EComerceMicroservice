package com.ecomerce.account.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final List<Map<String, String>> listUsername;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return listUsername.stream()
                .filter(user -> user.get("username").equals(username))
                .findFirst()
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.get("username"),
                        "",
                        List.of(() -> user.get("role"))
                ))
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public void appendUser(String username, String role) {
        listUsername.add(Map.of(
                "username", username,
                "role", role
        ));
    }
}
