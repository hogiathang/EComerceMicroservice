package com.ecomerce.account.controller;

import com.ecomerce.account.dto.UserContentDto;
import com.ecomerce.account.service.IAccountService;
import com.ecomerce.account.service.IImageService;
import com.ecomerce.account.service.JWTGenerator;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/account")
@AllArgsConstructor
public class UserContentController {
    private final IImageService iImageService;

    @GetMapping("/user-base-info")
    public ResponseEntity<UserContentDto> getUserBaseInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        byte [] image = iImageService.getAvatar(authentication.getName());

        return ResponseEntity.status(HttpStatus.OK)
                .body(new UserContentDto(
                            authentication.getName(),
                            image
                ));
    }
}
