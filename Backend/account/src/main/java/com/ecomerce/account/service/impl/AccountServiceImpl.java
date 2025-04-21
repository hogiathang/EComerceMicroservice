package com.ecomerce.account.service.impl;

import com.ecomerce.account.dto.RegisterDto;
import com.ecomerce.account.exception.UserAlreadyExisted;
import com.ecomerce.account.mapper.AccountMapper;
import com.ecomerce.account.repository.AccountRepository;
import com.ecomerce.account.service.IAccountService;
import com.ecomerce.account.service.IHashingPassword;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements IAccountService {

    private final AccountRepository accountRepository;
    private final IHashingPassword hashingPassword;

    @Override
    public String accountRegister(RegisterDto registerDto) {
        if (accountRepository.existsByEmailOrUsername(registerDto.getEmail(), registerDto.getName())) {
            throw new UserAlreadyExisted("User with this email or username already exists");
        }
        // Hash the password before saving
        registerDto.setPassword(hashingPassword.hashPassword(registerDto.getPassword()));

        // Save the account entity to the database
        accountRepository.save(AccountMapper.registerToDTO(registerDto));
        return "Account created successfully";
    }
}
