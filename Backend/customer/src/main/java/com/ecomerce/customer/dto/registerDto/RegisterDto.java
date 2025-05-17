package com.ecomerce.customer.dto.registerDto;

import java.util.List;

public class RegisterDto {
    private String username;
    private String password;

    public RegisterDto(String username, String password, List<String> roles) {
        this.username = username;
        this.password = password;
    }

    public RegisterDto() {
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
