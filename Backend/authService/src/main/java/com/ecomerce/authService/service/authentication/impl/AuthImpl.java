package com.ecomerce.authService.service.authentication.impl;

import com.ecomerce.authService.dto.loginDto.LoginForm;
import com.ecomerce.authService.dto.registerDto.RegisterDto;
import com.ecomerce.authService.dto.token.Token;
import com.ecomerce.authService.dto.user.UserDto;
import com.ecomerce.authService.repository.UserRepository;
import com.ecomerce.authService.service.authentication.AuthenticationInterface;
import com.ecomerce.authService.service.jwt.JWTInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class AuthImpl implements AuthenticationInterface {
    protected final JWTInterface jwtInterface;
    protected final UserRepository userRepository;

    public AuthImpl(JWTInterface jwtInterface, UserRepository userRepository) {
        this.jwtInterface = jwtInterface;
        this.userRepository = userRepository;
    }

    @Override
    public abstract Token register(RegisterDto registerDto);

    @Override
    public abstract Token login(LoginForm loginForm);

    @Override
    public abstract String logout(Token token);

    @Override
    public abstract Token refreshToken(String refreshToken);

    protected Token generateToken(String userId, String username, List<String> roles) {
        String accessToken = jwtInterface.generateAccessToken(
                userId,
                username,
                roles
        );

        String refreshToken = jwtInterface.generateRefreshToken(
                userId,
                username,
                roles
        );

        return new Token(
                accessToken,
                refreshToken,
                new UserDto(
                        userId,
                        username,
                        roles
                )
        );
    }
}

