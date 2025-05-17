package com.ecomerce.gateway.dto.exception;

import org.springframework.http.HttpStatus;

public class ExceptionDto {
    private String apiPath;
    private String serviceName;
    private String message;
    private HttpStatus status;
    private String timestamp;

    public ExceptionDto(String apiPath, String serviceName, String message, HttpStatus status, String timestamp) {
        this.apiPath = apiPath;
        this.serviceName = serviceName;
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;
    }

    public String getApiPath() {
        return apiPath;
    }

    public void setApiPath(String apiPath) {
        this.apiPath = apiPath;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}