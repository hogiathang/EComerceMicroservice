package com.ecomerce.authService.dto.loginDto;

public class BaseLoginDto extends LoginForm{
    private String username;
    private String password;

    public BaseLoginDto() {
        super();
    }

    public BaseLoginDto(String username, String password) {
        super();
        this.username = username;
        this.password = password;
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
