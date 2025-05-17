package com.ecomerce.customer.service;

import com.ecomerce.customer.dto.customer.CustomerInformationDto;
import com.ecomerce.customer.dto.registerDto.RegisterDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.service.Customer.RegisterInterface;
import com.ecomerce.customer.service.CustomerInformation.CustomerInformation;
import org.springframework.stereotype.Service;

/**
 * CustomerFacade là một lớp dịch vụ trong ứng dụng Spring Boot
 * được sử dụng để tổng quát các chức năng liên quan đến khách hàng.
 * Nó bao gồm việc lấy thông tin khách hàng,
 * cập nhật thông tin khách hàng,
 * xóa thông tin khách hàng,
 * và đăng ký khách hàng mới.
 */
@Service("customerFacade")
public class CustomerFacade {
    /**
     * customerInformation là một đối tượng của lớp CustomerInformation
     * được sử dụng để xử lý các chức năng liên quan đến thông tin khách hàng.
     */
    private final CustomerInformation customerInformation;

    /**
     * registerInterface là một đối tượng của lớp RegisterInterface
     * được sử dụng để xử lý các chức năng liên quan đến đăng ký khách hàng.
     */
    private final RegisterInterface registerInterface;

    /**
     * Constructor để khởi tạo CustomerFacade với các đối tượng cần thiết.
     *
     * @param customerInformation đối tượng CustomerInformation để xử lý thông tin khách hàng.
     * @param registerInterface đối tượng RegisterInterface để xử lý đăng ký khách hàng.
     */
    public CustomerFacade(CustomerInformation customerInformation, RegisterInterface registerInterface) {
        this.customerInformation = customerInformation;
        this.registerInterface = registerInterface;
    }

    /**
     * Phương thức xử lý các hành động liên quan đến thông tin khách hàng.
     *
     * @param customerDto đối tượng chứa thông tin khách hàng.
     * @param actionType loại hành động cần thực hiện (GET, UPDATE, DELETE).
     * @return ResponseDto chứa thông tin phản hồi từ việc xử lý.
     */
    public ResponseDto<?> customerInformationAction(CustomerInformationDto customerDto, String actionType) {
        ResponseDto<?> response = null;
        switch (actionType) {
            case "GET":
                response = customerInformation.getCustomerInformation(customerDto);
                break;
            case "UPDATE":
                response = customerInformation.updateCustomerInformation(customerDto);
                break;
            case "DELETE":
                response = customerInformation.deleteCustomerInformation(customerDto);
                break;
            default:
                System.out.println("Invalid action type");
        }
        return response;
    }

    /**
     * Phương thức xử lý việc đăng ký khách hàng mới.
     *
     * @param registerDto đối tượng chứa thông tin đăng ký của khách hàng.
     * @return ResponseDto chứa thông tin phản hồi từ việc đăng ký.
     */
    public ResponseDto<?> registerCustomer(RegisterDto registerDto) {
        return registerInterface.registerCustomer(registerDto);
    }
}
