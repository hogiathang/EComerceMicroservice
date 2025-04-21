package com.ecomerce.account.service;

import com.ecomerce.account.dto.RegisterDto;

public interface IAccountService {
    String accountRegister(RegisterDto registerDto);
}
