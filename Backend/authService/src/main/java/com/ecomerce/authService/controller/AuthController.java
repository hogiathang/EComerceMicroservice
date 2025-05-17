package com.ecomerce.authService.controller;

import com.ecomerce.authService.dto.loginDto.BaseLoginDto;
import com.ecomerce.authService.dto.loginDto.Oauth2LoginDto;
import com.ecomerce.authService.dto.registerDto.RegisterDto;
import com.ecomerce.authService.dto.response.ResponseDto;
import com.ecomerce.authService.dto.token.Token;
import com.ecomerce.authService.service.authentication.AuthenticationInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Đây là 1 REST controller dùng để xác thực người dùng
 */
@RestController(value = "auth")
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final Map<String, AuthenticationInterface> authenticationServiceMap;

    /**
     * Constructor
     * @param authenticationServiceMap là 1 map chứa các service xác thực người dùng
     */
    public AuthController(
        Map<String, AuthenticationInterface> authenticationServiceMap) {
        this.authenticationServiceMap = authenticationServiceMap;
    }

    /**
     * Đây là 1 map dùng để đăng ký người dùng
     */
    @PostMapping("/register")
    public ResponseEntity<ResponseDto<Token>> register(@RequestBody RegisterDto registerDto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(
                        new ResponseDto<>(
                                HttpStatus.CREATED,
                                "Register success",
                                authenticationServiceMap.get("base")
                                        .register(registerDto)
                        )
                );
    }

    /**
     * Đây là 1 map dùng để đăng nhập
     */
    @PostMapping("/login")
    public ResponseEntity<ResponseDto<Token>> login(
        @RequestBody BaseLoginDto baseLoginDto
    ) {

         return ResponseEntity.status(HttpStatus.OK)
                .body(
                        new ResponseDto<>(
                                HttpStatus.OK,
                                "Login success",
                                authenticationServiceMap.get("base")
                                        .login(baseLoginDto)
                        )
                );
    }
    /**
     * Đây là 1 map dùng để đăng nhập bằng oauth2
     */
    @PostMapping("/oauth2/login")
    public ResponseEntity<ResponseDto<Token>> oauth2Login(
        @RequestBody Oauth2LoginDto oauth2LoginDto
    ) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(
                        new ResponseDto<>(
                                HttpStatus.OK,
                                "Login success",
                                authenticationServiceMap.get("oauth2")
                                        .login(oauth2LoginDto)
                        )
                );
    }

    /**
     * Đây là 1 map dùng để refresh token
     */
    @PostMapping("/refresh-token")
    public ResponseEntity<ResponseDto<Token>> refreshToken(
        @RequestBody Token token
    ) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(
                        new ResponseDto<>(
                                HttpStatus.OK,
                                "Refresh token success",
                                authenticationServiceMap.get("base")
                                        .refreshToken(token.getRefreshToken())
                        )
                );
    }

    /**
     * Đây là 1 map dùng để đăng xuất
     */
    @PostMapping("/logout")
    public ResponseEntity<ResponseDto<String>> logout(
        @RequestBody Token token
    ) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(
                        new ResponseDto<>(
                                HttpStatus.OK,
                                "Logout success",
                                authenticationServiceMap.get("base")
                                        .logout(token)
                        )
                );
    }
}
