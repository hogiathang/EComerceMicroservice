package com.ecomerce.authService.entity.user.role;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class RoleId implements Serializable {
    private UUID userId;
    private String role;

    public RoleId() {}
    public RoleId(UUID userID, String role) {
        this.userId = userID;
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoleId)) return false;
        RoleId that = (RoleId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(role, that.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, role);
    }
}
