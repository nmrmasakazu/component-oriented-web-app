package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.exception.CustomException;
import com.nmrmasakazu.api.auth.model.Role;
import com.nmrmasakazu.api.auth.model.User;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.auth.service.UserService;

import java.security.Principal;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("promisedetail/{username}/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CLIENT')")
    public Promise promisedetail(@PathVariable("username") String username, @PathVariable("id") int id, Principal principal) {
        Promise promise = promiseService.findById(id);
        promise.getUser().setPassword(null);
        if (promise == null) {
            throw new CustomException("約束表がありません", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (!promise.getUser().getUsername().equals(username)) {
            throw new CustomException("ユーザ名と約束表が対応していません", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        String loggedName = principal.getName();
        User loggedUser = userService.search(loggedName);
        if (loggedUser.getRoles().contains(Role.ROLE_ADMIN)) {
            return promise;
        } else if (promise.getUser().getUsername().equals(loggedName)) {
            return promise;
        }
        throw new CustomException("アクセスができません", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @PostMapping("updatepromise")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Promise updatepromise(@RequestBody Promise promise) {
        promiseService.saveFromAuth(promise);
        return promise;
    }

    @GetMapping("promisetableclient")
    @PreAuthorize("hasRole('ROLE_CLIENT')")
    public List<Promise> promisetableclient(Principal principal) {
        String loggedName = principal.getName();
        User loggedUser = userService.search(loggedName);
        return loggedUser.acquirePromiseList();
    }

    @PostMapping("updatepromiseclient")
    @PreAuthorize("hasRole('ROLE_CLIENT')")
    public Promise updatepromiseclient(@RequestBody Promise promise) {
        promiseService.saveFromUser(promise);
        return promise;
    }

}
