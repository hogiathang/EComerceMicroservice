package com.ecomerce.customer.service.CustomerInformation.impl;

import com.ecomerce.customer.dto.customer.CustomerInformationDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.entity.customer.CustomerEntity;
import com.ecomerce.customer.repository.CustomerRepository;
import com.ecomerce.customer.service.CustomerInformation.CustomerInformation;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service("customerInformation")
public class CustomerInformationImpl implements CustomerInformation {

    private final CustomerRepository customerRepository;

    public CustomerInformationImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public ResponseDto<CustomerEntity> getCustomerInformation(CustomerInformationDto customerDto) {
        UUID customerId = UUID.fromString(customerDto.getCustomerId());
        return customerRepository.findById(customerId)
                .map(customerEntity -> new ResponseDto<>(
                        HttpStatus.OK,
                        "Customer information retrieved successfully",
                        customerEntity
                ))
                .orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    @Override
    public ResponseDto<CustomerEntity> updateCustomerInformation(CustomerInformationDto customerDto) {
        UUID customerId = UUID.fromString(customerDto.getCustomerId());
        CustomerEntity customerEntity = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        customerEntity.updateInfo(customerDto);
        customerRepository.save(customerEntity);
        return new ResponseDto<>(
                HttpStatus.OK,
                "Customer information updated successfully",
                customerEntity
        );
    }

    @Override
    public ResponseDto<?> deleteCustomerInformation(CustomerInformationDto customerDto) {
        return null;
    }
}
