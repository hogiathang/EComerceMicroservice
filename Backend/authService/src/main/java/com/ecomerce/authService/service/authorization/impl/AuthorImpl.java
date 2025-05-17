package com.ecomerce.authService.service.authorization.impl;

import com.ecomerce.authService.dto.response.ResponseDto;
import com.ecomerce.authService.entity.user.role.RoleEntity;
import com.ecomerce.authService.repository.RoleRepository;
import com.ecomerce.authService.service.authorization.AuthorizationInterface;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

/**
 * AuthorImpl là một lớp thực hiện interface AuthorizationInterface
 * được sử dụng để quản lý các quyền của người dùng trong hệ thống.
 */
@Service("authorImpl")
public class AuthorImpl implements AuthorizationInterface {
    /**
     * roleRepository là một đối tượng của lớp RoleRepository
     * được sử dụng để truy cập và thao tác với cơ sở dữ liệu
     */
    private final RoleRepository roleRepository;

    /**
     * Constructor của AuthorImpl
     *
     * @param roleRepository là một đối tượng của lớp RoleRepository
     */
    public AuthorImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    /**
     * Phương thức này được sử dụng để cấp quyền cho người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseDto chứa thông tin về kết quả của việc cấp quyền
     */
    @Override
    public ResponseDto<?> grantRoleToUser(String userId, String roleId) {
        this.roleRepository.save(new RoleEntity(
                userId,
                roleId
        ));
        return new ResponseDto<>(
                HttpStatus.ACCEPTED,
                "Role granted successfully",
                null
        );
    }

    /**
     * Phương thức này được sử dụng để thu hồi quyền của người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseDto chứa thông tin về kết quả của việc thu hồi quyền
     */
    @Override
    public ResponseDto<?> revokeRoleFromUser(String userId, String roleId) {
        this.roleRepository.delete(new RoleEntity(
                userId,
                roleId
        ));
        return new ResponseDto<>(
                HttpStatus.ACCEPTED,
                "Role revoked successfully",
                null
        );
    }
}
