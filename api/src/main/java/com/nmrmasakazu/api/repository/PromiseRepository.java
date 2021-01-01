package com.nmrmasakazu.api.repository;

import com.nmrmasakazu.api.domain.Promise;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PromiseRepository extends JpaRepository<Promise, Long> {

    Promise findById(int id);

    @Query(value = "select * from promise where user_id = :user_id order by id asc", nativeQuery = true)
    List<Promise> findPromiseByUserId(@Param("user_id") int user_id);

    @Query(value = "select max(id) from promise where promise.user_id=:user_id and update_time is not null;", nativeQuery = true)
    Optional<Integer> findLatestId(@Param("user_id") int user_id);

}
