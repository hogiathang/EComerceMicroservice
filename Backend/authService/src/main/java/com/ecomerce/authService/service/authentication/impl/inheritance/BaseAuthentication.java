package com.ecomerce.authService.service.authentication.impl.inheritance;

import com.ecomerce.authService.dto.loginDto.BaseLoginDto;
import com.ecomerce.authService.dto.loginDto.LoginForm;
import com.ecomerce.authService.dto.registerDto.RegisterDto;
import com.ecomerce.authService.dto.token.Token;
import com.ecomerce.authService.entity.user.UserEntity;
import com.ecomerce.authService.entity.user.role.RoleEntity;
import com.ecomerce.authService.repository.UserRepository;
import com.ecomerce.authService.service.authentication.impl.AuthImpl;
import com.ecomerce.authService.service.jwt.JWTInterface;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service("base")
public class BaseAuthentication extends AuthImpl {
    public BaseAuthentication(JWTInterface jwtInterface, UserRepository userRepository) {
        super(jwtInterface, userRepository);
    }

    @Override
    public Token register(RegisterDto registerDto) {
        UserEntity userEntity = userRepository.findByUsernameAndPassword(
                registerDto.getUsername(),
                registerDto.getPassword()
        ).orElseGet(() -> {
            UserEntity newUser = new UserEntity();
            newUser.setUsername(registerDto.getUsername());
            newUser.setPassword(registerDto.getPassword());
            newUser.setDateModify(LocalDateTime.now());
            return userRepository.save(newUser);
        });
        return this.generateToken(
                userEntity.getId().toString(),
                userEntity.getUsername(),
                userEntity.getRoles().stream()
                        .map(RoleEntity::getRole).toList()
        );
    }

    @Override
    public Token login(LoginForm loginForm) {
        BaseLoginDto baseLoginDto = (BaseLoginDto) loginForm;
        UserEntity user = userRepository.findByUsernameAndPassword(
                baseLoginDto.getUsername(),
                baseLoginDto.getPassword()
        ).orElseThrow(
                () -> new RuntimeException("User not found")
        );

        return this.generateToken(
                user.getId().toString(),
                user.getUsername(),
                user.getRoles().stream()
                        .map(RoleEntity::getRole).toList()
        );
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
