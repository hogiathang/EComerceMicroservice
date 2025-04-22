package com.ecomerce.account.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
@Getter
@Setter
public class ResponseDto {
    private String message;
    private String status;
}
