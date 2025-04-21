package com.ecomerce.account.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "account")
@Setter @Getter
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "accountId", nullable = false, unique = true, columnDefinition = "BINARY(16)")
    private UUID accountId;

    @Column(unique = true, nullable = false, columnDefinition = "VARCHAR(20)")
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = true, columnDefinition = "VARCHAR(20)")
    private String contactPhone;

    @Column (nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isActive;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<UserAddressEntity> listOfAddresses;
}
