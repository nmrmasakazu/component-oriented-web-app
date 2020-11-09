package com.nmrmasakazu.api.domain.wakka;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="wakka_target")
public class WakkaTarget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private double times;

    @Column(nullable = true)
    private double forces;

    public WakkaTarget() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getTimes() {
        return times;
    }

    public double getForces() {
        return forces;
    }
}
