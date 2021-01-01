package com.nmrmasakazu.api.service.item;

import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;
import com.nmrmasakazu.api.domain.item.UserItemCh;
import com.nmrmasakazu.api.domain.item.UserItemTr;
import java.util.List;

public interface UserItemService {

    List<String> findItemStrChByUserId(int id);

    List<String> findItemStrTrByUserId(int id);

    List<ItemCh> findItemChByUserId(int id);

    List<ItemTr> findItemTrByUserId(int id);

    List<ItemCh> findNotItemChByUserId(int id);

    List<ItemTr> findNotItemTrByUserId(int id);

    void saveItemCh(UserItemCh userItemCh);

    void saveItemTr(UserItemTr userItemTr);

    void deleteItemCh(String username, String item);

    void deleteItemTr(String username, String item);
}
