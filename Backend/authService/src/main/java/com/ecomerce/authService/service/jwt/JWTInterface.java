package com.ecomerce.authService.service.jwt;

import java.util.List;

/**
 * JWTInterface là một interface trong ứng dụng Spring Boot
 * được sử dụng để định nghĩa các phương thức liên quan đến việc tạo và xác thực JWT (JSON Web Token).
 */
public interface JWTInterface {

    /**
     * Đây là hàm dùng để tạo access token
     * @param userId là id của người dùng
     * @param username là tên đăng nhập của người dùng
     * @param roles là danh sách các quyền của người dùng
     * @return access token
     */
    public String generateAccessToken(String userId, String username, List<String> roles);

    /**
     * Đây là hàm dùng để tạo refresh token
     * @param userId là id của người dùng
     * @param username là tên đăng nhập của người dùng
     * @param roles là danh sách các quyền của người dùng
     * @return refresh token
     */
    public String generateRefreshToken(String userId, String username, List<String> roles);

    /**
     * Đây là hàm dùng để xác thực token
     * @param token là token cần xác thực
     * @return true nếu token hợp lệ, false nếu không hợp lệ
     */
    public String refreshToken(String token);

    /**
     * Đây là hàm dùng để lấy id của người dùng từ token
     * @param token là token cần lấy id
     * @return id của người dùng
     */
    public String getNameFromToken(String token);
}
