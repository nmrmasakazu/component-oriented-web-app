package com.nmrmasakazu.api.service;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.repository.PromiseRepository;
import com.nmrmasakazu.api.repository.UserRepository;
import com.nmrmasakazu.api.model.Role;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class PromiseServiceImpl implements PromiseService {

    private final PromiseRepository promiseRepository;
    private final UserRepository userRepository;

    public PromiseServiceImpl(PromiseRepository promiseRepository,
                              UserRepository userRepository) {
        this.promiseRepository = promiseRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void savePromise(Promise promise) {
        promiseRepository.save(promise);
    }

    @Override
    public Promise findById(int id) {
        return promiseRepository.findById(id);
    }

    @Override
    public List<Promise> findByUserId(int userId) {
        return promiseRepository.findPromiseByUserId(userId);
    }


    public Optional<Integer> findLatestIdByUserId(int id) {
        return promiseRepository.findLatestId(id);
    }

    @Override
    public Role authUserByPromiseId(int promiseId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String loginName = auth.getName();
        List<Role> loginRole = userRepository.findByUsername(loginName).getRoles();

        if (loginRole.contains("ADMIN")) {
            return Role.ROLE_ADMIN;
        }
        User promiseOwnedUser = promiseRepository.findById(promiseId).getUser();
        if (promiseOwnedUser.getUsername().equals(loginName)) {
            return Role.ROLE_CLIENT;
        }
        return Role.ROLE_NONE;
    }

    @Override
    public Role apiAuthUserByPromiseId(String username, int promiseId) {
        User user = userRepository.findByUsername(username);

        if (user.getRoles().equals("ADMIN")) {
            return Role.ROLE_ADMIN;
        }
        User promiseOwnedUser = promiseRepository.findById(promiseId).getUser();
        if (promiseOwnedUser.getUsername().equals(user.getUsername())) {
            return Role.ROLE_CLIENT;
        }
        return Role.ROLE_NONE;
    }

    @Override
    public void saveFromAuth(Promise promise) {
        Promise updatePromise = promiseRepository.findById(promise.getId());
        updatePromise.setActivity_1_ch(promise.getActivity_1_ch());
        updatePromise.setActivity_2_ch(promise.getActivity_2_ch());
        updatePromise.setActivity_3_ch(promise.getActivity_3_ch());
        updatePromise.setActivity_4_ch(promise.getActivity_4_ch());
        updatePromise.setComment_ch(promise.getComment_ch());
        updatePromise.setActivity_1_tr(promise.getActivity_1_tr());
        updatePromise.setActivity_2_tr(promise.getActivity_2_tr());
        updatePromise.setActivity_3_tr(promise.getActivity_3_tr());
        updatePromise.setComment_tr(promise.getComment_tr());
        updatePromise.setUpdate_time(new Date());
        promiseRepository.save(updatePromise);
    }

    @Override
    public void saveFromUser(Promise promise) {
        Promise updatePromise = promiseRepository.findById(promise.getId());
        updatePromise.setActivity_1_ch_user(promise.getActivity_1_ch_user());
        updatePromise.setActivity_2_ch_user(promise.getActivity_2_ch_user());
        updatePromise.setActivity_3_ch_user(promise.getActivity_3_ch_user());
        updatePromise.setActivity_4_ch_user(promise.getActivity_4_ch_user());
        updatePromise.setPoint_1_ch(promise.getPoint_1_ch());
        updatePromise.setPoint_2_ch(promise.getPoint_2_ch());
        updatePromise.setPoint_3_ch(promise.getPoint_3_ch());
        updatePromise.setPoint_4_ch(promise.getPoint_4_ch());
        updatePromise.setActivity_1_tr_user(promise.getActivity_1_tr_user());
        updatePromise.setActivity_2_tr_user(promise.getActivity_2_tr_user());
        updatePromise.setActivity_3_tr_user(promise.getActivity_3_tr_user());
        updatePromise.setPoint_1_tr(promise.getPoint_1_tr());
        updatePromise.setPoint_2_tr(promise.getPoint_2_tr());
        updatePromise.setPoint_3_tr(promise.getPoint_3_tr());
        updatePromise.setActivity_tr_time(promise.getActivity_tr_time());
        updatePromise.setUpdate_time_user(new Date());
        promiseRepository.save(updatePromise);
    }

    @Override
    public void createPromises(User user) {
        for (int loop = 0; loop < 3; loop++){
            for (int i = 0; i < 24; i++) {
                Promise promise = new Promise(i+1+loop*24, user.getId());
                savePromise(promise);
            }
        }
    }
}

