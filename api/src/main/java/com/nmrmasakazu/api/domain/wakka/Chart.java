package com.nmrmasakazu.api.domain.wakka;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.service.wakka.WakkaService;
import com.nmrmasakazu.api.util.CustomUtils;
import java.util.ArrayList;
import java.util.List;

public class Chart {

    private int trial;
    private int promiseId;

    private String target_name;
    private List<Integer> times = new ArrayList<>();
    private List<Double> measuredForces = new ArrayList<>();
    private List<Double> targetForces = new ArrayList<>();
    private List<Double> eye_xs = new ArrayList<>();
    private List<Double> eye_ys = new ArrayList<>();

    public Chart init(int trial, int promiseId, WakkaService wakkaService) {

        this.trial = trial;
        this.promiseId = promiseId;
        List<WakkaResult> wakkaResults = wakkaService.findWakkaResult(promiseId, trial);

        if (wakkaResults.isEmpty()) {
            setTempValueToTarget(wakkaService);
            return this;
        }

        target_name = wakkaResults.get(0).getTarget_name();

        for (WakkaResult wakkaResult: wakkaResults) {
            times.add((int) wakkaResult.getTimes());
            measuredForces.add(wakkaResult.getForces());
            eye_xs.add(wakkaResult.getEye_x());
            eye_ys.add(wakkaResult.getEye_y());

        }

        List<WakkaTarget> wakkaTargets = wakkaService.findWakkaTarget(target_name);
        targetForces = new ArrayList<>();
        for (WakkaTarget wakkaTarget: wakkaTargets) {
            targetForces.add(wakkaTarget.getForces());
        }

        return this;

    }

    private void setTempValueToTarget(WakkaService wakkaService) {

        Promise promise = wakkaService.findPromiseById(promiseId);
        char trial_order = promise.getTrial_order().charAt(trial);
        String targetName = CustomUtils.patternName.get(trial_order);
        List<WakkaTarget> wakkaTargets = wakkaService.findWakkaTarget(targetName);
        for (int i=0; i<wakkaTargets.size(); i++) {
            targetForces.add(wakkaTargets.get(i).getForces());
            // First, to show even if only targets, so measuredForces are add with tmp value
            times.add((int) ((i+1)*0.1));
        }
    }

    public List<Integer> getTimes() {
        return times;
    }

    public List<Double> getMeasuredForces() {
        return measuredForces;
    }

    public List<Double> getTargetForces() {
        return targetForces;
    }

    public String getTarget_name() {
        return target_name;
    }

    public int getTrial() {
        return trial;
    }

    public List<Double> getEye_xs() {
        return eye_xs;
    }

    public List<Double> getEye_ys() {
        return eye_ys;
    }

    public int getPromiseId() {
        return promiseId;
    }

}
