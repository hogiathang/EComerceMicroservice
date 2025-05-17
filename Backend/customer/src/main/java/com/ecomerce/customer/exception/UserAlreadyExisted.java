package com.ecomerce.customer.exception;

public class UserAlreadyExisted extends RuntimeException {
    public UserAlreadyExisted(String message) {
        super(message);
    }
}
