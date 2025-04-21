package com.ecomerce.account.repository;


import com.ecomerce.account.entity.AccountEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface AccountRepository extends JpaRepository<AccountEntity, UUID> {
    boolean existsByEmailOrUsername(String email, String username);
    boolean existsByContactPhone(String contactPhone);
    AccountEntity findByUsername(String username);
    AccountEntity findByEmail(String email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE account a " +
            " SET a.refresh_token = :refreshToken" +
            " WHERE a.username = :username", nativeQuery = true)
    void updateRefreshTokenByUsername(String username, String refreshToken);
}
