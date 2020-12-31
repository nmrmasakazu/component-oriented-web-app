package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.service.UserService;
import com.nmrmasakazu.api.service.item.UserItemService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admin")
public class AdminController {

    private final UserService userService;
    private final UserItemService userItemService;
    private final PromiseService promiseService;

    public AdminController(UserService userService,
                           UserItemService userItemService,
                           PromiseService promiseService) {
        this.userService = userService;
        this.userItemService = userItemService;
        this.promiseService = promiseService;
    }
    // Promise
    @GetMapping("promisetable/{username}")
    public List<Promise> userRecieve(@PathVariable("username") String username) {

        User user = userService.search(username);
        List<Promise> promises = user.acquirePromiseList();

        return promises;
    }

    @PostMapping("postpromise/{id}")
    public Promise postpromise(@PathVariable("id") int id, @RequestBody Promise promise) {
        promiseService.saveFromAuth(promise);
        return promise;
    }
}
