package com.ecomerce.account.controller;

import com.ecomerce.account.dto.LoginDto;
import com.ecomerce.account.dto.RegisterDto;
import com.ecomerce.account.dto.ResponseDto;
import com.ecomerce.account.service.IAccountService;
import com.ecomerce.account.utils.Pair;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/account")
@AllArgsConstructor
public class AccountController {
    private final IAccountService accountService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDto> login(@RequestBody @Validated LoginDto loginDto) {
        Pair<ResponseCookie, ResponseCookie> cookieResponse = createResponseJWTCookie(
                accountService.accountLogin(loginDto)
        );

        return ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, cookieResponse.first().toString())
                .header(HttpHeaders.SET_COOKIE, cookieResponse.second().toString())
                .body(new ResponseDto("User logged in successfully", "success"));
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDto> register(@RequestBody @Validated RegisterDto registerDto) {
        Pair<ResponseCookie, ResponseCookie> cookieResponse = createResponseJWTCookie(
                accountService.accountRegister(registerDto, "USER")
        );
        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.SET_COOKIE, cookieResponse.first().toString())
                .header(HttpHeaders.SET_COOKIE, cookieResponse.second().toString())
                .body(new ResponseDto("User registered successfully", "success"));
    }

    private Pair<ResponseCookie, ResponseCookie> createResponseJWTCookie(
            List<Map<String, String>> tokens
    ) {
        String refreshToken = tokens.get(1).get("refreshToken");
        String accessToken = tokens.get(0).get("accessToken");

        ResponseCookie rT = ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .sameSite("None")
                .maxAge(604800)
                .build();

        ResponseCookie aT = ResponseCookie.from("accessToken", accessToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .sameSite("None")
                .maxAge(604800)
                .build();

        return new Pair<>(aT, rT);
    }
}
