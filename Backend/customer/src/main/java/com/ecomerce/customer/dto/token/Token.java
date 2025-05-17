package com.ecomerce.customer.dto.token;


import com.ecomerce.customer.dto.user.UserDto;

public class Token {
    private final String accessToken;
    private final String refreshToken;
    private final UserDto user;

    public Token(String accessToken, String refreshToken, UserDto user) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.user = user;
    }
    public UserDto getUser() {return this.user;}
    public String getAccessToken() {
        return accessToken;
    }
    public String getRefreshToken() {
        return refreshToken;
    }

    public void addRole(String role) {
        this.user.addRole(role);
    }
}
