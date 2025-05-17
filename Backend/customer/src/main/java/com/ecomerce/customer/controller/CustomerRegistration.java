package com.ecomerce.customer.controller;

import com.ecomerce.customer.dto.registerDto.RegisterDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.service.CustomerFacade;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * CustomerRegistration Controller là một lớp điều khiển trong ứng dụng Spring Boot
 * được sử dụng để xử lý yêu cầu đăng ký tài khoản của khách hàng.
 */
@RestController(value = "customerRegister")
@RequestMapping("/api/v1/customer")
public class CustomerRegistration {

    private final CustomerFacade customerFacade;

    /**
     * Constructor để khởi tạo CustomerRegistration với CustomerFacade.
     *
     * @param customerFacade đối tượng CustomerFacade để xử lý logic đăng ký khách hàng.
     */
    public CustomerRegistration(CustomerFacade customerFacade) {
        this.customerFacade = customerFacade;
    }

    /**
     * Phương thức xử lý yêu cầu đăng ký tài khoản khách hàng.
     *
     * @param registerDto đối tượng chứa thông tin đăng ký của khách hàng.
     * @return ResponseEntity chứa thông tin phản hồi từ việc đăng ký.
     */
    @PostMapping("/register")
    public ResponseEntity<ResponseDto<?>> registerCustomer(
            @RequestBody RegisterDto registerDto
    ) {
        ResponseDto<?> response = customerFacade.registerCustomer(registerDto);
        return ResponseEntity.status(response.getStatus())
                .body(response);
    }
}
