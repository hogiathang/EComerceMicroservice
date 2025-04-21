package com.ecomerce.account.exception;

public class UserAlreadyExisted extends RuntimeException {
    public UserAlreadyExisted(String message) {
        super(message);
    }
}
