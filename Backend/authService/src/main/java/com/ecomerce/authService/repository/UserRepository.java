package com.ecomerce.authService.repository;

import com.ecomerce.authService.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    @Query(
            value = "SELECT role FROM role r WHERE r.user_id = ?1",
            nativeQuery = true
    )
    List<String> findRolesById(UUID id);

    @Query("SELECT u FROM UserEntity u LEFT JOIN FETCH u.roles WHERE u.username = :username AND u.password = :password")
    Optional<UserEntity> findByUsernameAndPassword(@Param("username") String username,
                                                   @Param("password") String password);
}
