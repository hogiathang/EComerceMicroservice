package com.ecomerce.authService.exception;

public class PasswordNotMatch extends RuntimeException {
  public PasswordNotMatch(String message) {
    super(message);
  }
}
