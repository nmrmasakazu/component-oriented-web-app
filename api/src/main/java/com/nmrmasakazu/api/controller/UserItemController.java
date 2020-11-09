package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.model.User;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;
import com.nmrmasakazu.api.domain.item.UserItemCh;
import com.nmrmasakazu.api.domain.item.UserItemTr;

import com.nmrmasakazu.api.service.item.ItemService;
import com.nmrmasakazu.api.service.item.UserItemService;
import com.nmrmasakazu.api.service.UserService;

import  com.nmrmasakazu.api.service.PromiseService;

import java.util.List;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/useritem")
public class UserItemController {

    private final UserService userService;
    private final ItemService itemService;
    private final UserItemService userItemService;
    private final PromiseService promiseService;

    public UserItemController(UserService userService,
                          ItemService itemService,
                          UserItemService userItemService,
                          PromiseService promiseService) {
        this.userService = userService;
        this.itemService = itemService;
        this.userItemService = userItemService;
        this.promiseService = promiseService;
    }

    // UserItemCh - Challenge Contents for each user
    @GetMapping("/useritemch/{username}")
    public List<ItemCh> useritemch(@PathVariable("username") String username, Model model) {
        User user = userService.search(username);
        List<ItemCh> userItemChStr = userItemService.findItemChByUserId(user.getId());
//        List<ItemCh> newItemChList = userItemService.findNotItemChByUserId(user.getId());
        return userItemChStr;
    }


    @GetMapping("/adduseritem/{username}/{id}")
    public String adduseritem(@PathVariable("username") String username, @PathVariable("id") int id) {
        User user = userService.search(username);
        ItemCh itemCh = itemService.findItemChById(id);
        UserItemCh userItemCh = new UserItemCh(itemCh.getId(), user.getId(), itemCh, user);
        userItemService.saveItemCh(userItemCh);
        return "OK";
    }

    @GetMapping("/removeuseritem/{username}/{item}")
    public String removeuseritem(@PathVariable("username") String username, @PathVariable("item") String item) {
        userItemService.deleteItemCh(username, item);
        return "OK";
    }

    // UserItemTr - Training Contents for each user
    @GetMapping("/useritemtr/{username}")
    public List<ItemTr> useritemtr(@PathVariable("username") String username, Model model) {
        User user = userService.search(username);
        List<ItemTr> userItemTrStr = userItemService.findItemTrByUserId(user.getId());
        List<ItemTr> newItemTrList = userItemService.findNotItemTrByUserId(user.getId());
        return userItemService.findItemTrByUserId(user.getId());
    }

    @GetMapping("/adduseritemtr/{username}/{id}")
    public String adduseritemtr(@PathVariable("username") String username, @PathVariable("id") int id) {
        User user = userService.search(username);
        ItemTr itemTr = itemService.findItemTrById(id);
        UserItemTr userItemTr = new UserItemTr(itemTr.getId(), user.getId(), itemTr, user);
        userItemService.saveItemTr(userItemTr);
        return "OK";
    }

    @GetMapping("/removeuseritemtr/{username}/{item}")
    public String removeuseritemtr(@PathVariable("username") String username, @PathVariable("item") String item) {
        userItemService.deleteItemTr(username, item);
        return "OK";
    }
}
