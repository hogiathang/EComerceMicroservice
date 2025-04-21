package com.ecomerce.account.mapper;

import com.ecomerce.account.dto.RegisterDto;
import com.ecomerce.account.entity.AccountEntity;

public class AccountMapper {
    public static AccountEntity registerToDTO(RegisterDto registerDto) {
        AccountEntity accountEntity = new AccountEntity();

        accountEntity.setUsername(registerDto.getName());
        accountEntity.setEmail(registerDto.getEmail());
        accountEntity.setPassword(registerDto.getPassword());
        accountEntity.setIsActive(true);
        return accountEntity;
    }
}
