package com.ecomerce.account.service.impl;

import com.ecomerce.account.dto.LoginDto;
import com.ecomerce.account.dto.RegisterDto;
import com.ecomerce.account.entity.AccountEntity;
import com.ecomerce.account.exception.UserAlreadyExisted;
import com.ecomerce.account.mapper.AccountMapper;
import com.ecomerce.account.repository.AccountRepository;
import com.ecomerce.account.service.IAccountService;
import com.ecomerce.account.service.IHashingPassword;
import com.ecomerce.account.service.JWTGenerator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements IAccountService {

    private final AccountRepository accountRepository;
    private final IHashingPassword hashingPassword;
    private final JWTGenerator jwtGenerator;
    private final CustomUserDetailsService userDetailsService;

    @Override
    public List<Map<String, String>> accountRegister(RegisterDto registerDto, String role) {
        if (accountRepository.existsByEmailOrUsername(registerDto.getEmail(), registerDto.getName())) {
            throw new UserAlreadyExisted("User with this email or username already exists");
        }
        List<Map<String, String>> tokens = generateTokens(registerDto.getName(), role);

        registerDto.setPassword(hashingPassword.hashPassword(registerDto.getPassword()));

        AccountEntity accountEntity = AccountMapper.registerToDTO(registerDto);
        accountEntity.setRefreshToken(tokens.get(1).get("refreshToken"));
        accountEntity.setRole(role);
        accountEntity.setIsActive(true);

        accountRepository.save(accountEntity);
        return tokens;
    }

    @Override
    public List<Map<String, String>> accountLogin(LoginDto loginDto) {
        String usernameOrEmail = loginDto.getUsernameOrEmail();
        AccountEntity accountEntity = usernameOrEmail.contains("@") ?
                accountRepository.findByEmail(usernameOrEmail) :
                accountRepository.findByUsername(usernameOrEmail);

        if (accountEntity == null) {
            throw new RuntimeException("User not found");
        }
        else if (!hashingPassword.checkPassword(loginDto.getPassword(), accountEntity.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        List<Map<String, String>> tokens = generateTokens(accountEntity.getUsername(), accountEntity.getRole());
        accountRepository.updateRefreshTokenByUsername(accountEntity.getUsername(), tokens.get(1).get("refreshToken"));
        return tokens;
    }

    private List<Map<String, String>> generateTokens(String username, String role) {
        userDetailsService.appendUser(username, role);
        return List.of(
                Map.of("accessToken", jwtGenerator.generateToken(username, role)),
                Map.of("refreshToken", jwtGenerator.generateRefeshToken(username, role)
        ));
    }
}
