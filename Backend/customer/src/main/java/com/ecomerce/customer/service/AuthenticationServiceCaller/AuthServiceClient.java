package com.ecomerce.customer.service.AuthenticationServiceCaller;

import com.ecomerce.customer.dto.registerDto.RegisterDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.dto.token.Token;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {
    @PostMapping("/api/v1/auth/register")
    ResponseEntity<ResponseDto<Token>> register(
            @RequestBody RegisterDto registerDto
    );

    @GetMapping("/api/v1/role/grant")
    ResponseEntity<ResponseDto<?>> grantRoleToUser(
            @RequestParam(name = "userId") String userId,
            @RequestParam(name = "roleId") String roleId
    );

    @GetMapping("/api/v1/role/revoke")
    ResponseEntity<ResponseDto<?>> revokeRoleFromUser(
            @RequestParam(name = "userId") String userId,
            @RequestParam(name = "roleId") String roleId
    );
}
