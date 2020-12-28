package com.nmrmasakazu.api.repository;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nmrmasakazu.api.model.User;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByUsername(String username);

    User findByUsername(String username);

    @Transactional
    void deleteByUsername(String username);

    @Query(value = "select * from user where id in (select user_id from user_roles where roles = 1);", nativeQuery = true)
    List<User> findClientUsers();

}
