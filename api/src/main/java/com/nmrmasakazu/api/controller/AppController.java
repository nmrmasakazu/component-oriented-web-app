package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.domain.wakka.WakkaResult;
import com.nmrmasakazu.api.request.WakkaRequest;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.service.UserService;
import com.nmrmasakazu.api.service.wakka.WakkaService;
import com.nmrmasakazu.api.util.CustomUtils;

import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("app")
public class AppController {

    private final UserService userService;
    private final PromiseService promiseService;
    private final WakkaService wakkaService;

    public AppController(UserService userService,
                         PromiseService promiseService,
                         WakkaService wakkaService) {
        this.userService = userService;
        this.promiseService = promiseService;
        this.wakkaService = wakkaService;
    }

    @PostMapping("add")
    public String add(HttpServletRequest req, @RequestBody WakkaRequest wakkaRequest) {

        Optional<Integer> latestPromiseId = promiseService.findLatestIdByUserId(userService.whoami(req).getId());
        if (latestPromiseId == null) {
            return "FAILED";
        }

        List<WakkaResult> preWakkaResults = wakkaService.findWakkaResult(latestPromiseId.orElse(1), wakkaRequest.getTrial());
        if (!preWakkaResults.isEmpty()) {
            return "FAILED";
        }

        List<Double> times = wakkaRequest.getTimes();
        List<Double> forces = wakkaRequest.getForces();
        List<Double> eye_xs = wakkaRequest.getEye_x();
        List<Double> eye_ys = wakkaRequest.getEye_y();
        for (int i = 0; i < times.size(); i++) {
            WakkaResult wakkaResult = new WakkaResult(
                    wakkaRequest.getTrial(),
                    times.get(i),
                    forces.get(i),
                    wakkaRequest.getTarget_name(),
                    latestPromiseId.orElse(1),
                    eye_xs.get(i),
                    eye_ys.get(i));
            wakkaService.saveWakkaResult(wakkaResult);
        }

        return "SUCCESS";

    }


    @PostMapping("wakkatask")
    public String wakkatask(HttpServletRequest req) {

        Optional<Integer> latestPromiseId = promiseService.findLatestIdByUserId(userService.whoami(req).getId());
        if (latestPromiseId == null) {
            return "FAILED";
        }

        Integer round = promiseService.findById(latestPromiseId.get()).getRound();

        Optional<Integer> latestTrial = wakkaService.findLatestTrialByPromiseId(latestPromiseId.get());
        Integer nextTrial = latestTrial.orElse(-1) + 1;
        if (nextTrial == 6) {
            String response = round + "-" + nextTrial + "-" + "FINISHED";
            return response;
        }

        Promise promise = promiseService.findById(latestPromiseId.get());
        char nextTask = promise.getTrial_order().charAt(nextTrial);
        String response = round + "-" + nextTrial + "-" + CustomUtils.patternName.get(nextTask);
        return response;

    }

}