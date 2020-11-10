package com.nmrmasakazu.api.request;

import java.io.Serializable;
import java.util.List;

public class WakkaRequest implements Serializable {

    private String username;
    private String password;


    private List<Double> times;
    private List<Double> forces;

    private List<Double> eye_x;
    private List<Double> eye_y;

    private int trial;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    private String target_name;

    public List<Double> getTimes() {
        return times;
    }

    public List<Double> getForces() {
        return forces;
    }

    public int getTrial() {
        return trial;
    }

    public String getTarget_name() {
        return target_name;
    }

    public List<Double> getEye_x() {
        return eye_x;
    }

    public List<Double> getEye_y() {
        return eye_y;
    }
}
