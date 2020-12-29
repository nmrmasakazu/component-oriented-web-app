package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.service.UserService;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("promise")
public class PromiseController {

    private final UserService userService;
    private final PromiseService promiseService;

    public PromiseController(UserService userService,
                            PromiseService promiseService) {
        this.userService = userService;
        this.promiseService = promiseService;
    }

    @GetMapping("promisetable/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Promise> promisetable(@PathVariable("username") String username) {
        User user = userService.search(username);
        return user.acquirePromiseList();
    }

    @GetMapping("promisedetail/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Promise promisedetail(@PathVariable("id") int id, Model model) {
        return promiseService.findById(id);
    }

}
