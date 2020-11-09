package com.nmrmasakazu.api.service.wakka;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.domain.wakka.WakkaResult;
import com.nmrmasakazu.api.domain.wakka.WakkaTarget;
import com.nmrmasakazu.api.repository.PromiseRepository;
import com.nmrmasakazu.api.repository.wakka.WakkaResultRepository;
import com.nmrmasakazu.api.repository.wakka.WakkaTargetRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class WakkaServiceImpl implements WakkaService {

    private final WakkaResultRepository wakkaResultRepository;
    private final WakkaTargetRepository wakkaTargetRepository;
    private final PromiseRepository promiseRepository;

    public WakkaServiceImpl(WakkaResultRepository wakkaResultRepository,
                            WakkaTargetRepository wakkaTargetRepository,
                            PromiseRepository promiseRepository) {
        this.wakkaResultRepository = wakkaResultRepository;
        this.wakkaTargetRepository = wakkaTargetRepository;
        this.promiseRepository = promiseRepository;
    }

    @Override
    public List<WakkaResult> findWakkaResult(int id, int trial) {
        return wakkaResultRepository.findWakkaResult(id, trial);
    }

    @Override
    public List<WakkaTarget> findWakkaTarget(String targetName) {
        return wakkaTargetRepository.findWakkaTarget(targetName);
    }

    @Override
    public void saveWakkaResult(WakkaResult wakkaResult) {
        wakkaResultRepository.save(wakkaResult);
    }

    @Override
    public Optional<Integer> findLatestTrialByPromiseId(int id) {
        return wakkaResultRepository.findLatestTrial(id);
    }

    @Override
    public Promise findPromiseById(int id) {
        return promiseRepository.findById(id);
    }
}
