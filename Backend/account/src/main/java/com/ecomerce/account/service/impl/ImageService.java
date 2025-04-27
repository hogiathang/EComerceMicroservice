package com.ecomerce.account.service.impl;

import com.ecomerce.account.service.IImageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@AllArgsConstructor
public class ImageService implements IImageService {
    private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));

    @Override
    public byte[] getAvatar(String username) {
        Path path = CURRENT_FOLDER.resolve("account/src/main/resources/static/images/avatars/" + username + ".png");
        try {
            return java.nio.file.Files.readAllBytes(path);
        } catch (Exception e) {
            path = CURRENT_FOLDER.resolve("account/src/main/resources/static/images/avatar.jpg");
            try {
                return java.nio.file.Files.readAllBytes(path);
            } catch (Exception ex) {
                throw new RuntimeException("Error reading avatar image", ex);
            }
        }
    }
}
