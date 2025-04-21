package com.ecomerce.account.controller;

import com.ecomerce.account.dto.RegisterDto;
import com.ecomerce.account.service.IAccountService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/account")
@AllArgsConstructor
public class AccountController {
    private final IAccountService accountService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Validated RegisterDto registerDto) {
        return new ResponseEntity<>(accountService.accountRegister(registerDto), HttpStatus.CREATED);
    }

    @PostMapping("/test")
    public String test() {
        return "test";
    }
}
