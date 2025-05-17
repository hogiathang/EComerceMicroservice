package com.ecomerce.authService.exception;

public class UserAlreadyExisted extends RuntimeException {
    public UserAlreadyExisted(String message) {
        super(message);
    }
}
