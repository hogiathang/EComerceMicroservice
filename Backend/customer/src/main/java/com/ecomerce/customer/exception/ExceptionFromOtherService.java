package com.ecomerce.customer.exception;

public class ExceptionFromOtherService extends RuntimeException {
  public ExceptionFromOtherService(String message) {
    super(message);
  }
}
