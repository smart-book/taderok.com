package com.taderok.taderok.Service.Upload;


import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {

	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get("C:/Users/Asus/Documents/GitHub/taderok.com/taderok-front/light/src/assets/images/upload/uploadRessources/");
	private final Path rootLocationPhotoUser = Paths.get("C:/Users/Asus/Documents/GitHub/taderok.com/taderok-front/light/src/assets/images/upload/uploadUser/");
	private final Path rootLocationPhotoAnnonce = Paths.get("C:/Users/Asus/Documents/GitHub/taderok.com/taderok-front/light/src/assets/images/upload/uploadAnnonce/");

	public void store(MultipartFile file) {
		try {
			Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}

	public void storeUserPhoto(MultipartFile file) {
		try {
			Files.copy(file.getInputStream(), this.rootLocationPhotoUser.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}
	public void storeAnnoncePhoto(MultipartFile file) {
		try {
			Files.copy(file.getInputStream(), this.rootLocationPhotoAnnonce.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}

	public Resource loadFile(String filename) {
		try {
			Path file = rootLocation.resolve(filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("FAIL!");
			}


		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
	}

	public void deleteAll() {
		FileSystemUtils.deleteRecursively(rootLocation.toFile());
	}

	public void init() {
		try {
			Files.createDirectory(rootLocation);
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage!");
		}
	}
}
