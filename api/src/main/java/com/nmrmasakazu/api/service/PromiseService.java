package com.nmrmasakazu.api.service;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.model.Role;
import com.nmrmasakazu.api.model.User;
import java.util.List;
import java.util.Optional;

public interface PromiseService {

    void savePromise(Promise promise);

    Promise findById(int id);

    List<Promise> findByUserId(int userId);

    Optional<Integer> findLatestIdByUserId(int id);

    Role authUserByPromiseId(int promiseId);

    Role apiAuthUserByPromiseId(String username, int promiseId);

    void saveFromAuth(Promise promise);
    void saveFromUser(Promise promise);

    void createPromises(User user);
}
