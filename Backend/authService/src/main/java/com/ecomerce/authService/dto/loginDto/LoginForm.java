package com.ecomerce.authService.dto.loginDto;

import java.time.LocalDateTime;

public class LoginForm {
    private LocalDateTime dateCreated;

    public LoginForm() {
        this.dateCreated = LocalDateTime.now();
    }

    public LocalDateTime getDateCreated() {
        return this.dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }
}
