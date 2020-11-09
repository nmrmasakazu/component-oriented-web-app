package com.nmrmasakazu.api.service.item;

import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.domain.item.ItemCh;
import com.nmrmasakazu.api.domain.item.ItemTr;
import com.nmrmasakazu.api.domain.item.UserItemCh;
import com.nmrmasakazu.api.domain.item.UserItemTr;
import com.nmrmasakazu.api.repository.item.ItemChRepository;
import com.nmrmasakazu.api.repository.item.ItemTrRepository;
import com.nmrmasakazu.api.repository.item.UserItemChRepository;
import com.nmrmasakazu.api.repository.item.UserItemTrRepository;
import com.nmrmasakazu.api.repository.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class UserItemServiceImpl implements UserItemService {

    private final UserItemChRepository userItemChRepository;
    private final UserItemTrRepository userItemTrRepository;

    private final ItemChRepository itemChRepository;
    private final ItemTrRepository itemTrRepository;

    private final UserRepository userRepository;

    public UserItemServiceImpl(UserItemChRepository userItemChRepository,
                               UserItemTrRepository userItemTrRepository,
                               ItemChRepository itemChRepository,
                               ItemTrRepository itemTrRepository,
                               UserRepository userRepository) {
        this.userItemChRepository = userItemChRepository;
        this.userItemTrRepository = userItemTrRepository;
        this.itemChRepository = itemChRepository;
        this.itemTrRepository = itemTrRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<String> findItemStrChByUserId(int id) {
        List<UserItemCh> userItemChList = userItemChRepository.findItemByUserId(id);
        List<String> userItemChStrList = userItemChList.stream()
                .map(s->itemChRepository.findById(s.getItem_id()).getItem())
                .collect(Collectors.toList());
        return userItemChStrList;
    }

    @Override
    public List<String> findItemStrTrByUserId(int id) {
        List<UserItemTr> userItemTrList = userItemTrRepository.findItemByUserId(id);
        List<String> useItemTrStrList = userItemTrList.stream()
                .map(s->itemTrRepository.findById(s.getItem_id()).getItem())
                .collect(Collectors.toList());
        return useItemTrStrList;
    }

    @Override
    public List<ItemCh> findItemChByUserId(int id) {
        List<UserItemCh> userItemChList = userItemChRepository.findItemByUserId(id);
        List<ItemCh> userItemChObList = userItemChList.stream()
                .map(s->itemChRepository.findById(s.getItem_id()))
                .collect(Collectors.toList());
        return userItemChObList;
    }

    @Override
    public List<ItemTr> findItemTrByUserId(int id) {
        List<UserItemTr> userItemTrList = userItemTrRepository.findItemByUserId(id);
        List<ItemTr> useItemTrObList = userItemTrList.stream()
                .map(s->itemTrRepository.findById(s.getItem_id()))
                .collect(Collectors.toList());
        return useItemTrObList;
    }

    @Override
    public List<ItemCh> findNotItemChByUserId(int id) {
        List<UserItemCh> userItemChList = userItemChRepository.findItemByUserId(id);
        List<Integer> userItemChId = userItemChList.stream().map(s->s.getItem_id()).collect(Collectors.toList());
        List<ItemCh> notHavingItemCh = itemChRepository.findAll()
                .stream()
                .filter(s->!userItemChId.contains(s.getId()))
                .collect(Collectors.toList());
        return notHavingItemCh;
    }

    @Override
    public List<ItemTr> findNotItemTrByUserId(int id) {
        List<UserItemTr> userItemTrList = userItemTrRepository.findItemByUserId(id);
        List<Integer> userItemTrId = userItemTrList.stream().map(s->s.getItem_id()).collect(Collectors.toList());
        List<ItemTr> notHavingItemCh = itemTrRepository.findAll()
                .stream()
                .filter(s->!userItemTrId.contains(s.getId()))
                .collect(Collectors.toList());
        return notHavingItemCh;
    }

    @Override
    public void saveItemCh(UserItemCh userItemCh) {
        userItemChRepository.save(userItemCh);
    }

    @Override
    public void saveItemTr(UserItemTr userItemTr) {
        userItemTrRepository.save(userItemTr);
    }

    @Override
    public void deleteItemCh(String username, String item) {
        User user = userRepository.findByUsername(username);
        List<ItemCh> itemChList = itemChRepository.findAll()
                .stream()
                .filter(s->s.getItem().equals(item))
                .collect(Collectors.toList());
        UserItemCh userItemCh = userItemChRepository.findItemByItemId(user.getId(), itemChList.get(0).getId());
        userItemChRepository.delete(userItemCh);
    }

    @Override
    public void deleteItemTr(String username, String item) {
        User user = userRepository.findByUsername(username);
        List<ItemTr> itemTrList = itemTrRepository.findAll()
                .stream()
                .filter(s->s.getItem().equals(item))
                .collect(Collectors.toList());
        UserItemTr userItemTr = userItemTrRepository.findItemByItemId(user.getId(), itemTrList.get(0).getId());
        userItemTrRepository.delete(userItemTr);

    }

}
