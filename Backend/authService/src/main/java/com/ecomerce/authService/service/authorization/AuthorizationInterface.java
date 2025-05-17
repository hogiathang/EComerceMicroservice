package com.ecomerce.authService.service.authorization;

import com.ecomerce.authService.dto.response.ResponseDto;

/**
 * AuthorizationInterface là một interface trong ứng dụng Spring Boot
 * được sử dụng để quản lý các quyền của người dùng trong hệ thống.
 */
public interface AuthorizationInterface {
    /**
     * Phương thức này được sử dụng để cấp quyền cho người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseDto chứa thông tin về kết quả của việc cấp quyền
     */
    public ResponseDto<?> grantRoleToUser(String userId, String roleId);

    /**
     * Phương thức này được sử dụng để thu hồi quyền của người dùng
     *
     * @param userId là id của người dùng
     * @param roleId là id của vai trò
     * @return một đối tượng ResponseDto chứa thông tin về kết quả của việc thu hồi quyền
     */
    public ResponseDto<?> revokeRoleFromUser(String userId, String roleId);
}
