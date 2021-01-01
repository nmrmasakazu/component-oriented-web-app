package com.nmrmasakazu.api.service.item;

import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;
import java.util.List;

public interface ItemService {

    List<ItemCh> findAllItemCh();
    List<ItemTr> findAllItemTr();

    void saveItemCh(ItemCh itemCh);
    void saveItemTr(ItemTr itemTr);

    ItemCh findItemChById(int id);
    ItemTr findItemTrById(int id);

    void deleteItemCh(ItemCh itemCh);
    void deleteItemTr(ItemTr itemTr);

}
