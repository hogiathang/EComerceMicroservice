package com.ecomerce.account.dto;

import jakarta.validation.constraints.Pattern;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    @Pattern(
            regexp = "^[A-Za-z0-9]{3,20}$",
            message = "Name must be between 3 and 20 characters"
    )
    private String usernameOrEmail;

    @Pattern(
            regexp = "^[A-Za-z0-9]+$",
            message = "Password only contains letters and numbers"
    )
    private String password;
}
