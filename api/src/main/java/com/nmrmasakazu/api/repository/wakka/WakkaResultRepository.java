package com.nmrmasakazu.api.repository.wakka;

import com.nmrmasakazu.api.domain.wakka.WakkaResult;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WakkaResultRepository extends JpaRepository<WakkaResult, Long> {

    @Query(value = "select * from wakka_result where promise_id = :promiseId and trial = :trial", nativeQuery = true)
    List<WakkaResult> findWakkaResult(@Param("promiseId") int promiseId, @Param("trial") int trial);

    @Query(value = "select max(trial) from wakka_result where promise_id = :promiseId", nativeQuery = true)
    Optional<Integer> findLatestTrial(@Param("promiseId") int promiseId);


}
