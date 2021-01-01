package com.nmrmasakazu.api.auth.controller;

import com.nmrmasakazu.api.auth.dto.TokenDTO;
import com.nmrmasakazu.api.auth.dto.UserDataDTO;
import com.nmrmasakazu.api.auth.dto.UserResponseDTO;
import com.nmrmasakazu.api.auth.model.User;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.auth.service.UserService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PromiseService promiseService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/signin")
    public TokenDTO login(@RequestParam String username, @RequestParam String password) {
        return userService.signin(username, password);
    }

    @PostMapping("/signup")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public TokenDTO signup(@RequestBody UserDataDTO userDTO) {
        TokenDTO tokenDTO = userService.signup(modelMapper.map(userDTO, User.class));
        User user = userService.search(userDTO.getUsername());
        promiseService.createPromises(user);
        return tokenDTO;
    }

    @DeleteMapping(value = "/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String delete(@PathVariable String username) {
        userService.delete(username);
        return username;
    }

    @GetMapping(value = "/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public UserResponseDTO search(@PathVariable String username) {
        return modelMapper.map(userService.search(username), UserResponseDTO.class);
    }

    @GetMapping(value = "/me")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public UserResponseDTO whoami(HttpServletRequest req) {
        return modelMapper.map(userService.whoami(req), UserResponseDTO.class);
    }

    @GetMapping("/refresh")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    public String refresh(HttpServletRequest req) {
        return userService.refresh(req.getRemoteUser());
    }

    @GetMapping("/clients")
    public List<User> allUser(Model model) {
        return userService.findClientUsers();
    }

}
