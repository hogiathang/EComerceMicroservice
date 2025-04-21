package com.ecomerce.account.service;

public interface IHashingPassword {
    public String hashPassword(String password);
    public boolean checkPassword(String password, String hashed);
}
