package com.ecomerce.authService.controller;

import com.ecomerce.authService.dto.response.ResponseDto;
import com.ecomerce.authService.service.authorization.AuthorizationInterface;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * RoleController là một lớp điều khiển trong ứng dụng Spring Boot
 * được sử dụng để quản lý các vai trò của người dùng trong hệ thống.
 */
@RestController(value = "role")
@RequestMapping("/api/v1/role")
public class RoleController {
    /**
     * authorService là một đối tượng của lớp AuthorizationInterface
     */
    private final AuthorizationInterface authorService;
    /**
     * Constructor của RoleController
     *
     * @param authorService là một đối tượng của lớp AuthorizationInterface
     */
    public RoleController(AuthorizationInterface authorService) {
        this.authorService = authorService;
    }

    /**
     * Phương thức này được sử dụng để cấp quyền cho người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseEntity chứa thông tin về kết quả của việc cấp quyền
     */
    @GetMapping("/grant")
    public ResponseEntity<ResponseDto<?>> grantRoleToUser(
            @RequestParam(name = "userId") String userId,
            @RequestParam(name = "roleId") String roleId
    ) {
        ResponseDto<?> responseDto = authorService.grantRoleToUser(
                userId,
                roleId
        );

        return ResponseEntity.status(responseDto.getStatus()).body(responseDto);
    }

    /**
     * Phương thức này được sử dụng để thu hồi quyền của người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseEntity chứa thông tin về kết quả của việc thu hồi quyền
     */
    @GetMapping("/revoke")
    public ResponseEntity<ResponseDto<?>> revokeRoleFromUser(
            @RequestParam(name = "userId") String userId,
            @RequestParam(name = "roleId") String roleId
    ) {
        ResponseDto<?> responseDto = authorService.revokeRoleFromUser(
                userId,
                roleId
        );

        return ResponseEntity.status(responseDto.getStatus()).body(responseDto);
    }
}
