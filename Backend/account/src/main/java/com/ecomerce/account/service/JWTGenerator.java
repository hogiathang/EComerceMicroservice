package com.ecomerce.account.service;

import jakarta.servlet.http.HttpServletRequest;

public interface JWTGenerator {
    String  generateToken(String username, String role);
    String  generateRefeshToken(String username, String role);
    String  getRoleFromToken(String token);
    String  getUsernameFromToken(String token);
    Boolean isValidToken(String token);
    String  resolveToken(HttpServletRequest request);
}
