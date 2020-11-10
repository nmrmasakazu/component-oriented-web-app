package com.nmrmasakazu.api.controller;

import com.nmrmasakazu.api.domain.wakka.Chart;
import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.service.PromiseService;
import com.nmrmasakazu.api.service.UserService;
import com.nmrmasakazu.api.service.wakka.WakkaService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("promise")
public class PromiseController {

    private final UserService userService;
    private final PromiseService promiseService;
    private final WakkaService wakkaService;

    public PromiseController(UserService userService,
                            PromiseService promiseService,
                            WakkaService wakkaService) {
        this.userService = userService;
        this.promiseService = promiseService;
        this.wakkaService = wakkaService;
    }

    @GetMapping("promisedetail/{id}")
    public List<Chart> promisedetail(@PathVariable("id") int id, Model model) {

        // Promise contents
        Promise promise = promiseService.findById(id);

        // Chart contents
        List<Chart> chart = new ArrayList<>();
        for (int i=0; i<6; i++) {
            Chart chartModel = new Chart();
            chart.add(chartModel.init(i, id, wakkaService));
        }

        return chart;

    }

}
