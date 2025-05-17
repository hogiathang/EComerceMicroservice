package com.ecomerce.customer.dto.user;

import java.util.List;

public class UserDto {
    private String userId;
    private String username;
    private List<String> roles;

    public UserDto(String userId, String username, List<String> roles) {
        this.userId = userId;
        this.username = username;
        this.roles = roles;
    }

    public String getUserId() {
        return userId;
    }

    public void addRole(String role) {
        this.roles.add(role);
    }

    public String getUsername() {
        return username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
