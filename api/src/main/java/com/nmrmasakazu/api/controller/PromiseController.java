package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.exception.CustomException;
import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.service.UserService;

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
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Promise promisedetail(@PathVariable("username") String username, @PathVariable("id") int id, Principal principal) {
        Promise promise = promiseService.findById(id);
        promise.getUser().setPassword(null);
        if (promise == null) {
            throw new CustomException("約束表がありません", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (!promise.getUser().getUsername().equals(username)) {
            throw new CustomException("ユーザ名と約束表が対応していません", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return promise;
    }

    @PostMapping("updatepromise")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Promise updatepromise(@RequestBody Promise promise) {
        promiseService.saveFromAuth(promise);
        return promise;
    }

//    @GetMapping("promisedetail/client/{id}")
//    @PreAuthorize("hasRole('ROLE_CLIENT')")
//    public Promise promisedetail(@PathVariable("id") int id, Principal principal) {
//        String loggedName = principal.getName();
//        System.out.println(name);
//        return promiseService.findById(id);
//    }

}
