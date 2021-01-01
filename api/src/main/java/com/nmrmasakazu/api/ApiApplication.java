package com.nmrmasakazu.api;

import com.nmrmasakazu.api.auth.model.Role;
import com.nmrmasakazu.api.auth.model.User;
import java.util.ArrayList;
import java.util.Arrays;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.nmrmasakazu.api.auth.service.UserService;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner {

	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Override
	public void run(String... params) throws Exception {
//		User client = new User();
//		client.setUsername("client");
//		client.setPassword("client");
//		client.setEmail("client@email.com");
//		client.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_CLIENT)));
//
//		userService.signup(client);
	}
}
