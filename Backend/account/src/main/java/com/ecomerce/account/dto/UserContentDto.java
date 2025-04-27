package com.ecomerce.account.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Data
public class UserContentDto {
    private String username;
    byte[] avatar;
}
