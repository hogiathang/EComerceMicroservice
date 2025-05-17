package com.ecomerce.authService.dto.token;

import com.ecomerce.authService.dto.user.UserDto;

public class Token {
    private String accessToken;
    private String refreshToken;
    private UserDto user;

    public Token (String accessToken, String refreshToken, UserDto user) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.user = user;
    }

    public String getAccessToken() {return this.accessToken;}
    public String getRefreshToken() {return this.refreshToken;}
    public void setAccessToken(String accessToken) {this.accessToken = accessToken;}
    public void setRefreshToken(String refreshToken) {this.refreshToken = refreshToken;}
    public UserDto getUser() {return this.user;}
    public void setUser(UserDto user) {this.user = user;}
}
