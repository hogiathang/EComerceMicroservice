package com.ecomerce.account.service;

import com.ecomerce.account.dto.LoginDto;
import com.ecomerce.account.dto.RegisterDto;

import java.util.List;
import java.util.Map;

public interface IAccountService {
    List<Map<String, String>> accountRegister(RegisterDto registerDto, String role);
    List<Map<String, String>> accountLogin(LoginDto loginDto);
}
