package com.nmrmasakazu.api.service;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.model.Role;
import java.util.List;

public interface PromiseService {

    void savePromise(Promise promise);

    Promise findById(int id);

    List<Promise> findByUserId(int userId);

    Role authUserByPromiseId(int promiseId);

    Role apiAuthUserByPromiseId(String username, int promiseId);

    void saveFromAuth(Promise promise);
    void saveFromUser(Promise promise);
}
