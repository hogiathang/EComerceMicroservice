package com.ecomerce.account.dto;

import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.springframework.validation.annotation.Validated;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Validated
public class RegisterDto {
    @Pattern(
            regexp = "^[A-Za-z0-9]{3,20}$",
            message = "Name must be between 3 and 20 characters"
    )
    private String name;

    @Pattern(
            regexp = "^[A-Za-z0-9+_.-]+@(.+)$",
            message = "Email not valid format"
    )
    private String email;

    @Pattern(
            regexp = "^[A-Za-z0-9]+$",
            message = "Password only contains letters and numbers"
    )
    private String password;
}
