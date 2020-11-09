package com.nmrmasakazu.api.repository.wakka;

import com.nmrmasakazu.api.domain.wakka.WakkaTarget;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WakkaTargetRepository extends JpaRepository<WakkaTarget, Long> {

    @Query(value = "select * from wakka_target where name = :name", nativeQuery = true)
    List<WakkaTarget> findWakkaTarget(@Param("name") String name);

}
