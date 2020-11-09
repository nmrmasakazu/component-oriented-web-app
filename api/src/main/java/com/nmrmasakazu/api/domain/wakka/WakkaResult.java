package com.nmrmasakazu.api.domain.wakka;

import com.nmrmasakazu.api.domain.Promise;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="wakka_result")
public class WakkaResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = true)
    private int trial;

    @Column(nullable = true)
    private double times;

    @Column(nullable = true)
    private double forces;

    @Column(nullable = false)
    private double eye_x;

    @Column(nullable = false)
    private double eye_y;

    @Column(nullable = false)
    private String target_name;

    @Column(nullable = false)
    private int promise_id;

    @ManyToOne
    @JoinColumn(name="promise_id", nullable=false, insertable = false, updatable = false)
    private Promise promise;

    public WakkaResult() {
    }

    public WakkaResult(int trial,
                       double times,
                       double forces,
                       String target_name,
                       int promise_id,
                       double eye_x,
                       double eye_y) {
        this.trial = trial;
        this.times = times;
        this.forces = forces;
        this.target_name = target_name;
        this.promise_id = promise_id;
        this.eye_x = eye_x;
        this.eye_y = eye_y;
    }

    public int getId() {
        return id;
    }

    public int getTrial() {
        return trial;
    }

    public double getTimes() {
        return times;
    }
    public void setTimes(double times) {
        this.times = times;
    }

    public double getForces() {
        return forces;
    }
    public void setForces(double forces) {
        this.forces = forces;
    }

    public String getTarget_name() {
        return target_name;
    }

    public int getPromise_id() {
        return promise_id;
    }

    public double getEye_x() {
        return eye_x;
    }
    public void setEye_x(int eye_x) {
        this.eye_x = eye_x;
    }

    public double getEye_y() {
        return eye_y;
    }
    public void setEye_y(int eye_y) {
        this.eye_y = eye_y;
    }

    public Promise getPromise() {
        return promise;
    }
}
