package com.ecomerce.customer.service.Customer;

import com.ecomerce.customer.dto.registerDto.RegisterDto;
import com.ecomerce.customer.dto.response.ResponseDto;

/**
 * RegisterInterface là một interface trong ứng dụng Spring Boot
 * được sử dụng để định nghĩa các phương thức liên quan đến việc đăng ký khách hàng.
 */
public interface RegisterInterface {
    /**
     * Phương thức để đăng ký một khách hàng mới.
     *
     * @param registerDto đối tượng chứa thông tin đăng ký của khách hàng.
     * @return ResponseDto chứa thông tin phản hồi từ việc đăng ký.
     */
    ResponseDto<?> registerCustomer(RegisterDto registerDto);
}
