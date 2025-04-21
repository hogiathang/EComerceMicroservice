package com.ecomerce.account.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Data
@Getter
@Setter
public class ExceptionDto {
    private String apiPath;
    private String serviceName;
    private String message;
    private HttpStatus status;
    private String timestamp;
}
