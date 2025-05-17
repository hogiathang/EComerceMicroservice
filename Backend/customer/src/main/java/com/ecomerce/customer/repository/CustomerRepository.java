package com.ecomerce.customer.repository;

import com.ecomerce.customer.entity.customer.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CustomerRepository extends JpaRepository<CustomerEntity, UUID> {
}
