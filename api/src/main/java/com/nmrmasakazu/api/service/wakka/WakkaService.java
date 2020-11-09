package com.nmrmasakazu.api.service.wakka;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.domain.wakka.WakkaResult;
import com.nmrmasakazu.api.domain.wakka.WakkaTarget;
import java.util.List;
import java.util.Optional;

public interface WakkaService {

    List<WakkaResult> findWakkaResult(int id, int trial);

    List<WakkaTarget> findWakkaTarget(String targetName);

    void saveWakkaResult(WakkaResult wakkaResult);

    Optional<Integer> findLatestTrialByPromiseId(int id);

    Promise findPromiseById(int id);
}
