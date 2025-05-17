package com.ecomerce.customer.service.Customer.impl;

import com.ecomerce.customer.dto.registerDto.RegisterDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.dto.token.Token;
import com.ecomerce.customer.service.AuthenticationServiceCaller.AuthServiceClient;
import com.ecomerce.customer.service.Customer.RegisterInterface;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

/**
 * RegisterImpl là một lớp dịch vụ trong ứng dụng Spring Boot
 * được sử dụng để thực hiện các chức năng liên quan đến việc đăng ký khách hàng.
 */
@Service("registerInterface")
public class RegisterImpl implements RegisterInterface {
    /**
     * authServiceClient là một đối tượng của lớp AuthServiceClient
     * được sử dụng để gọi các dịch vụ xác thực từ một dịch vụ khác.
     */
    private final AuthServiceClient authServiceClient;

    /**
     * Constructor để khởi tạo RegisterImpl với AuthServiceClient.
     *
     * @param authServiceClient đối tượng AuthServiceClient để gọi các dịch vụ xác thực.
     */
    public RegisterImpl(AuthServiceClient authServiceClient) {
        this.authServiceClient = authServiceClient;
    }

    /**
     * Phương thức để đăng ký một khách hàng mới.
     * Bước 1: Gọi dịch vụ xác thực để đăng ký người dùng.
     * Bước 2: Nếu đăng ký thành công, cấp quyền cho người dùng.
     * @param registerDto đối tượng chứa thông tin đăng ký của khách hàng.
     * @return ResponseDto chứa thông tin phản hồi từ việc đăng ký.
     */
    @Override
    public ResponseDto<?> registerCustomer(RegisterDto registerDto) {
        // Gọi dịch vụ xác thực để đăng ký người dùng
        ResponseDto<Token> response = authServiceClient.register(registerDto).getBody();
        if (response == null || !response.getStatus().equals(HttpStatus.CREATED)) {
            return new ResponseDto<>(
                    response.getStatus(),
                    "Failed to register user",
                    null
            );
        }
        Token token = response.getData();
        if (token == null) {
            return new ResponseDto<>(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed to register user",
                    null
            );
        }

        // Gọi dịch vụ xác thực để cấp quyền cho người dùng
        ResponseDto<?> roleResponse = authServiceClient.grantRoleToUser(
                token.getUser().getUserId(),
                "ROLE_CUSTOMER"
        ).getBody();

        if (roleResponse == null || !roleResponse.getStatus().equals(HttpStatus.ACCEPTED)) {
            return new ResponseDto<>(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed to grant role to user",
                    null
            );
        }

        return new ResponseDto<>(
                HttpStatus.CREATED,
                "User registered successfully",
                token
        );
    }
}
