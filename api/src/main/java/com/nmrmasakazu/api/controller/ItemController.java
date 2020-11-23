// curl -X POST 'http://localhost:8080/users/signin?username=admin&password=admin'
// curl -X GET http://localhost:8080/item/itemch -H 'Authorization: Bearer <TOKEN>'

package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;

import com.nmrmasakazu.api.service.item.ItemService;
import com.nmrmasakazu.api.service.item.UserItemService;
import com.nmrmasakazu.api.service.UserService;

import  com.nmrmasakazu.api.service.PromiseService;

import java.util.List;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final UserService userService;
    private final ItemService itemService;
    private final UserItemService userItemService;
    private final PromiseService promiseService;

    public ItemController(UserService userService,
                           ItemService itemService,
                           UserItemService userItemService,
                           PromiseService promiseService) {
        this.userService = userService;
        this.itemService = itemService;
        this.userItemService = userItemService;
        this.promiseService = promiseService;
    }

    // ItemCh - Challenge Contents
    @GetMapping("/itemch")
    public List<ItemCh> itemch() {
        return itemService.findAllItemCh();
    }

    @PostMapping("/additemch")
    public String additemch(@RequestBody ItemCh itemCh) {
        String item = itemCh.getItem();
        ItemCh newItemCh = new ItemCh(item);
        itemService.saveItemCh(newItemCh);
        return "";
    }

    @DeleteMapping("/removeitemch/{id}")
    public String removeitemch(@PathVariable("id") int id) {
        ItemCh itemCh = itemService.findItemChById(id);
        itemService.deleteItemCh(itemCh);
        return "";
    }

    // ItemTr - Training Contents
    @GetMapping("/itemtr")
    public List<ItemTr> itemtr(Model model) {
        return itemService.findAllItemTr();
    }

    @PostMapping("/additemtr")
    public String additemtr(ItemTr itemTr) {
        String item = itemTr.getItem();
        ItemTr newItemTr = new ItemTr(item);
        itemService.saveItemTr(newItemTr);
        return "OK";
    }

    @GetMapping("/removeitemtr/{id}")
    public String removeitemtr(@PathVariable("id") int id) {
        ItemTr itemTr = itemService.findItemTrById(id);
        itemService.deleteItemTr(itemTr);
        return "OK";
    }

}
