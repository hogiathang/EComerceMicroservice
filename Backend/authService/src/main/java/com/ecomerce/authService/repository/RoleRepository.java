package com.ecomerce.authService.repository;

import com.ecomerce.authService.entity.user.role.RoleEntity;
import com.ecomerce.authService.entity.user.role.RoleId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, RoleId> {
}
