package com.ecomerce.customer.controller;

import com.ecomerce.customer.dto.customer.CustomerInformationDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.service.CustomerFacade;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("customerInfo")
@RequestMapping("/api/v1/customer")
public class CustomerInformationController {
    private final CustomerFacade customerFacade;

    public CustomerInformationController(CustomerFacade customerFacade) {
        this.customerFacade = customerFacade;
    }

    @PostMapping("/get")
    public ResponseEntity<ResponseDto<?>> getCustomerInformation(
            @RequestBody String customerId
    ) {
        ResponseDto<?> response = customerFacade.customerInformationAction(
                new CustomerInformationDto(customerId),
                "GET"
        );
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping("/update")
    public ResponseEntity<ResponseDto<?>> updateCustomerInformation(
            @RequestBody CustomerInformationDto customerDto
            ) {
        ResponseDto<?> response = customerFacade.customerInformationAction(
                customerDto,
                "UPDATE"
        );
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<ResponseDto<?>> deleteCustomerInformation(
            @RequestBody CustomerInformationDto customerDto
            ) {
        ResponseDto<?> response = customerFacade.customerInformationAction(
                customerDto,
                "DELETE"
        );
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
