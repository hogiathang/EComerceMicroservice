package com.ecomerce.authService.service.authentication;

import com.ecomerce.authService.dto.loginDto.LoginForm;
import com.ecomerce.authService.dto.registerDto.RegisterDto;
import com.ecomerce.authService.dto.token.Token;

/**
 * Đây là interface dùng để xác thực người dùng
 */
public interface AuthenticationInterface {

    /**
     * Đây là hàm dùng để đăng ký người dùng
     * @param registerDto là thông tin đăng ký của người dùng
     * @return token là token xác thực của người dùng
     */
    public Token register(RegisterDto registerDto);

    /**
     * Đây là hàm dùng để xác thực người dùng
     * @param loginForm là thông tin đăng nhập của người dùng
     * @return token là token xác thực của người dùng
     */
    public Token login(LoginForm loginForm);

    /**
     * Đây là hàm dùng để đăng xuất người dùng
     * @return string là thông báo đăng xuất thành công
     */
    public String logout(Token token);

    /**
     * Đây là hàm dùng để làm mới token xác thực của người dùng
     * @param refreshToken là token xác thực của người dùng
     * @return token là token xác thực của người dùng
     */
    public Token refreshToken(String refreshToken);
}
