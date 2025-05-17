package com.ecomerce.customer.entity.customer;

import com.ecomerce.customer.dto.customer.CustomerInformationDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "customer")
public class CustomerEntity {
    @Id
    @Column(name = "customer_id", nullable = false, unique = true)
    private UUID customerId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "profile_picture_url")
    private String profilePicture;

    @Column(name = "province")
    private String province;

    @Column(name = "district")
    private String district;

    @Column(name = "neighborhood")
    private String neighborhood;

    @Column(name = "street")
    private String street;

    @Column(name = "house_number")
    private String houseNumber;

    public CustomerEntity() {
    }

    public CustomerEntity(UUID customerId,
                          String firstName,
                          String lastName,
                          String email,
                          String phoneNumber,
                          String profilePicture,
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
        this.profilePicture = profilePicture;
        this.province = province;
        this.district = district;
        this.neighborhood = neighborhood;
        this.street = street;
        this.houseNumber = houseNumber;
    }

    public void updateInfo(CustomerInformationDto customerInformationDto) {
        this.firstName = customerInformationDto.getFirstName();
        this.lastName = customerInformationDto.getLastName();
        this.email = customerInformationDto.getEmail();
        this.phoneNumber = customerInformationDto.getPhoneNumber();
        this.province = customerInformationDto.getProvince();
        this.district = customerInformationDto.getDistrict();
        this.neighborhood = customerInformationDto.getNeighborhood();
        this.street = customerInformationDto.getStreet();
        this.houseNumber = customerInformationDto.getHouseNumber();
    }
}
