package com.ecomerce.customer.service.CustomerInformation;

import com.ecomerce.customer.dto.customer.CustomerInformationDto;
import com.ecomerce.customer.dto.response.ResponseDto;

public interface CustomerInformation {
    ResponseDto<?> getCustomerInformation(CustomerInformationDto customerDto);
    ResponseDto<?> updateCustomerInformation(CustomerInformationDto customerDto);
    ResponseDto<?> deleteCustomerInformation(CustomerInformationDto customerDto);
}
