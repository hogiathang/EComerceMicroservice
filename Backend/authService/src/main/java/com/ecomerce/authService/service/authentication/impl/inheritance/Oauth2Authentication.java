package com.ecomerce.authService.service.authentication.impl.inheritance;

import com.ecomerce.authService.dto.loginDto.LoginForm;
import com.ecomerce.authService.dto.loginDto.Oauth2LoginDto;
import com.ecomerce.authService.dto.registerDto.RegisterDto;
import com.ecomerce.authService.dto.token.Token;
import com.ecomerce.authService.repository.UserRepository;
import com.ecomerce.authService.service.authentication.impl.AuthImpl;
import com.ecomerce.authService.service.jwt.JWTInterface;
import org.springframework.stereotype.Service;

@Service("oauth2")
public class Oauth2Authentication extends AuthImpl {

    public Oauth2Authentication(JWTInterface jwtInterface, UserRepository userRepository) {
        super(jwtInterface, userRepository);
    }

    @Override
    public Token register(RegisterDto registerDto) {
        return null;
    }

    @Override
    public Token login(LoginForm loginForm) {
        Oauth2LoginDto oauth2LoginDto = (Oauth2LoginDto) loginForm;
        return null;
    }

    @Override
    public String logout(Token token) {
        return null;
    }

    @Override
    public Token refreshToken(String refreshToken) {
        return null;
    }
}
