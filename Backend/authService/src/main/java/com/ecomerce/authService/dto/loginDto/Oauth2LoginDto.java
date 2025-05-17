package com.ecomerce.authService.dto.loginDto;

public class Oauth2LoginDto extends LoginForm{
    private String token;

    public Oauth2LoginDto() {
        super();
    }

    public Oauth2LoginDto(String token) {
        super();
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}