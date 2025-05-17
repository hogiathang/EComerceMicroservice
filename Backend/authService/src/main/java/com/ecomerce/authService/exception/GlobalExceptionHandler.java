package com.ecomerce.authService.exception;

import com.ecomerce.authService.dto.exception.ExceptionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler {
//    Handle Global Exception
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionDto> handleException(Exception e, WebRequest webRequest) {
        ExceptionDto exceptionDto = new ExceptionDto(
                webRequest.getDescription(false),
                "Account Service",
                e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR,
                new Date().toString()
        );
        return new ResponseEntity<>(exceptionDto, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // Handle Runtime Exception
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ExceptionDto> handleRuntimeException(RuntimeException e, WebRequest webRequest) {
        ExceptionDto exceptionDto = new ExceptionDto(
                webRequest.getDescription(false),
                "Account Service",
                e.getMessage(),
                HttpStatus.BAD_REQUEST,
                new Date().toString()
        );
        return new ResponseEntity<>(exceptionDto, HttpStatus.BAD_REQUEST);
    }

    // Handle UserAlreadyExisted Exception
    @ExceptionHandler(UserAlreadyExisted.class)
    public ResponseEntity<ExceptionDto> handleUserAlreadyExisted(UserAlreadyExisted e, WebRequest webRequest) {
        ExceptionDto exceptionDto = new ExceptionDto(
                webRequest.getDescription(false),
                "Account Service",
                e.getMessage(),
                HttpStatus.CONFLICT,
                new Date().toString()
        );
        return new ResponseEntity<>(exceptionDto, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDto> handleValidationExceptions(MethodArgumentNotValidException e, WebRequest webRequest) {
        List<String> errors = new ArrayList<>();
        e.getBindingResult().getFieldErrors().forEach(error -> {
            errors.add(error.getField() + ": " + error.getDefaultMessage());
        });
        StringBuilder message = new StringBuilder();
        for (String error : errors) {
            message.append(error);
            message.append(", ");
        }
        return new ResponseEntity<>(new ExceptionDto(
                webRequest.getDescription(false),
                "Account Service",
                message.toString(),
                HttpStatus.BAD_REQUEST,
                new Date().toString()
        ), HttpStatus.BAD_REQUEST);
    }
}