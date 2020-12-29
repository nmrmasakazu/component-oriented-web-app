package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.dto.UserItemDTO;
import com.nmrmasakazu.api.model.User;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        return userItemService.findItemChByUserId(user.getId());
    }

    @GetMapping("/notuseritemch/{username}")
    public List<ItemCh> notuseritemch(@PathVariable("username") String username, Model model) {
        User user = userService.search(username);
        return userItemService.findNotItemChByUserId(user.getId());
    }

    @PostMapping("/adduseritemch")
    public UserItemCh adduseritem(@RequestBody UserItemDTO userItem) {
        User user = userService.search(userItem.getUsername());
        ItemCh itemCh = itemService.findItemChById(userItem.getId());
        UserItemCh userItemCh = new UserItemCh(itemCh.getId(), user.getId(), itemCh, user);
        userItemService.saveItemCh(userItemCh);
        return userItemCh;
    }

    @PostMapping("/removeuseritemch")
    public UserItemDTO removeuseritem(@RequestBody UserItemDTO userItem) {
        userItemService.deleteItemCh(userItem.getUsername(), userItem.getItem());
        return userItem;
    }

    // UserItemTr - Training Contents for each user
    @GetMapping("/useritemtr/{username}")
    public List<ItemTr> useritemtr(@PathVariable("username") String username, Model model) {
        User user = userService.search(username);
        return userItemService.findItemTrByUserId(user.getId());
    }

    @GetMapping("/notuseritemtr/{username}")
    public List<ItemTr> notuseritemtr(@PathVariable("username") String username, Model model) {
        User user = userService.search(username);
        return userItemService.findNotItemTrByUserId(user.getId());
    }

    @PostMapping("/adduseritemtr")
    public UserItemTr adduseritemtr(@RequestBody UserItemDTO userItem) {
        User user = userService.search(userItem.getUsername());
        ItemTr itemTr = itemService.findItemTrById(userItem.getId());
        UserItemTr userItemTr = new UserItemTr(itemTr.getId(), user.getId(), itemTr, user);
        userItemService.saveItemTr(userItemTr);
        return userItemTr;
    }

    @PostMapping("/removeuseritemtr")
    public UserItemDTO removeuseritemtr(@RequestBody UserItemDTO userItem) {
        userItemService.deleteItemTr(userItem.getUsername(), userItem.getItem());
        return userItem;
    }
}
