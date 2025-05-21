package com.ecomerce.customer.service.ImageService;

import com.ecomerce.customer.dto.fileDto.FileDto;
import com.ecomerce.customer.dto.response.ResponseDto;
import com.ecomerce.customer.repository.CustomerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

public class ImageService implements AvatarInterface{
    private final CustomerRepository customerRepository;
    private final String imageDirectory = "";
    /**
     * Constructor to initialize the ImageService with the required dependencies.
     *
     * @param customerRepository the repository for customer data
     */
    public ImageService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    /**
     * Uploads an avatar image.
     *
     * @param imageFile the image file to upload
     * @param userId the ID of the user
     * @return a ResponseDto containing the result of the upload operation
     */
    @Override
    public ResponseDto<?> uploadAvatar(FileDto imageFile, String userId) {
        MultipartFile file = imageFile.getFile();
        String fileType    = imageFile.getFileType();
        String fileUrl     = imageFile.getFileUrl();

        if (file == null && fileUrl == null) {
            throw new IllegalArgumentException("File and URL cannot be both null");
        } else if (file != null) {
            // Handle File Upload
        } else {
            // Handle URL Upload
            // Check if the URL is valid
            if (!fileUrl.startsWith("http://") && !fileUrl.startsWith("https://")) {
                throw new IllegalArgumentException("Invalid URL format");
            }
            customerRepository.saveCustomerAvatar(fileUrl, userId);
        }
        return new ResponseDto<>(
                HttpStatus.OK,
                "Avatar uploaded successfully",
                null
        );
    }

    @Override
    public ResponseDto<?> getAvatar(String userId) {
        String avatarUrl = customerRepository.getCustomerAvatar(userId);
        if (avatarUrl == null) {
            return new ResponseDto<>(
                    HttpStatus.OK,
                    "Avatar not found",
                    null
            );
        } else {
            return new ResponseDto<>(
                    HttpStatus.OK,
                    "Avatar retrieved successfully",
                    avatarUrl
            );
        }
    }

    private String saveImageToDirectory(MultipartFile file) {

    }
}
