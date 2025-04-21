package com.ecomerce.account.repository;


import com.ecomerce.account.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface AccountRepository extends JpaRepository<AccountEntity, UUID> {
    boolean existsByEmailOrUsername(String email, String username);
    boolean existsByContactPhone(String contactPhone);
}
