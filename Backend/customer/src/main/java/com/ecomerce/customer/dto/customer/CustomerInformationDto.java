package com.ecomerce.customer.dto.customer;

public class CustomerInformationDto {
    public String customerId;
    public String firstName;
    public String lastName;
    public String email;
    public String phoneNumber;
    public String province;
    public String district;
    public String neighborhood;
    public String street;
    public String houseNumber;

    public CustomerInformationDto(String customerId,
                                  String firstName,
                                  String lastName,
                                  String email,
                                  String phoneNumber,
                                  String province,
                                  String district,
                                  String neighborhood,
                                  String street,
                                  String houseNumber) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.province = province;
        this.district = district;
        this.neighborhood = neighborhood;
        this.street = street;
        this.houseNumber = houseNumber;
    }

    public CustomerInformationDto() {
    }

    public CustomerInformationDto(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getProvince() {
        return province;
    }

    public String getDistrict() {
        return district;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public String getStreet() {
        return street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }
}
