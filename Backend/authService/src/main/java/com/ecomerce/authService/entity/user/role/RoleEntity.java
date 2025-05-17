package com.ecomerce.authService.entity.user.role;

import com.ecomerce.authService.entity.user.UserEntity;
import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "role")
@IdClass(RoleId.class)
public class RoleEntity {
    @Id
    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Id
    @Column(name = "role", nullable = false)
    private String role;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
    private UserEntity user;

    public String getRole() {
        return role;
    }

    public RoleEntity(String userId, String role) {
        this.userId = UUID.fromString(userId);
        this.role = role;
    }

    public RoleEntity(UUID userId, String role) {
        this.userId = userId;
        this.role = role;
    }

    public RoleEntity() {
    }

    public void setRole(String role) {
        this.role = role;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
