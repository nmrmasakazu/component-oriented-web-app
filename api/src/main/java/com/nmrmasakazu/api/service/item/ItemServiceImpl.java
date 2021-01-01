package com.nmrmasakazu.api.service.item;

import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;
import com.nmrmasakazu.api.repository.item.ItemChRepository;
import com.nmrmasakazu.api.repository.item.ItemTrRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemChRepository itemChRepository;
    private final ItemTrRepository itemTrRepository;

    public ItemServiceImpl(ItemChRepository itemChRepository,
                           ItemTrRepository itemTrRepository) {
        this.itemChRepository = itemChRepository;
        this.itemTrRepository = itemTrRepository;
    }


    @Override
    public List<ItemCh> findAllItemCh() {
        return itemChRepository.findAll();
    }

    @Override
    public List<ItemTr> findAllItemTr() {
        return itemTrRepository.findAll();
    }

    @Override
    public void saveItemCh(ItemCh itemCh) {
        itemChRepository.save(itemCh);
    }

    @Override
    public void saveItemTr(ItemTr itemTr) {
        itemTrRepository.save(itemTr);
    }

    @Override
    public ItemCh findItemChById(int id) {
        return itemChRepository.findById(id);
    }

    @Override
    public ItemTr findItemTrById(int id) {
        return itemTrRepository.findById(id);
    }

    @Override
    public void deleteItemCh(ItemCh itemCh) {
        itemChRepository.delete(itemCh);
    }

    @Override
    public void deleteItemTr(ItemTr itemTr) {
        itemTrRepository.delete(itemTr);
    }
}
