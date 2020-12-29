package com.nmrmasakazu.api.domain;

import com.nmrmasakazu.api.model.User;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="promise")
public class Promise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int round;

    // 挑戦項目 - 療法士の設定
    @Column(nullable = true)
    private String comment_ch;
    @Column(nullable = true)
    private String activity_1_ch;
    @Column(nullable = true)
    private String activity_2_ch;
    @Column(nullable = true)
    private String activity_3_ch;
    @Column(nullable = true)
    private String activity_4_ch;
    // 挑戦項目 - 療法士の設定
    @Column(nullable = true)
    private Integer point_1_ch;
    @Column(nullable = true)
    private Integer point_2_ch;
    @Column(nullable = true)
    private Integer point_3_ch;
    @Column(nullable = true)
    private Integer point_4_ch;
    @Column(nullable = true)
    private String activity_1_ch_user;
    @Column(nullable = true)
    private String activity_2_ch_user;
    @Column(nullable = true)
    private String activity_3_ch_user;
    @Column(nullable = true)
    private String activity_4_ch_user;

    // 自主トレーニング項目 - 療法士の設定
    @Column(nullable = true)
    private String comment_tr;
    @Column(nullable = true)
    private String activity_1_tr;
    @Column(nullable = true)
    private String activity_2_tr;
    @Column(nullable = true)
    private String activity_3_tr;
    // 自主トレーニング項目 - 療法士の設定
    @Column(nullable = true)
    private Integer point_1_tr;
    @Column(nullable = true)
    private Integer point_2_tr;
    @Column(nullable = true)
    private Integer point_3_tr;
    @Column(nullable = true)
    private String activity_1_tr_user;
    @Column(nullable = true)
    private String activity_2_tr_user;
    @Column(nullable = true)
    private String activity_3_tr_user;
    @Column(nullable = true)

    // リハビリの時間
    private String activity_tr_time;

    // 更新時間
    @Column(nullable = true)
    private Date update_time;
    @Column(nullable = true)
    private Date update_time_user;

    @Column(nullable = false)
    private int user_id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false, insertable = false, updatable = false)
    private User user;

    public Promise() {
    }

    public Promise(int round, int userId) {
        this.setRound(round);
        this.setUser_id(userId);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    public String getComment_ch() {
        return comment_ch;
    }

    public void setComment_ch(String comment_ch) {
        this.comment_ch = comment_ch;
    }

    public String getActivity_1_ch() {
        return activity_1_ch;
    }

    public void setActivity_1_ch(String activity_1_ch) {
        this.activity_1_ch = activity_1_ch;
    }

    public String getActivity_2_ch() {
        return activity_2_ch;
    }

    public void setActivity_2_ch(String activity_2_ch) {
        this.activity_2_ch = activity_2_ch;
    }

    public String getActivity_3_ch() {
        return activity_3_ch;
    }

    public void setActivity_3_ch(String activity_3_ch) {
        this.activity_3_ch = activity_3_ch;
    }

    public String getActivity_4_ch() {
        return activity_4_ch;
    }

    public void setActivity_4_ch(String activity_4_ch) {
        this.activity_4_ch = activity_4_ch;
    }

    public Integer getPoint_1_ch() {
        return point_1_ch;
    }

    public void setPoint_1_ch(Integer point_1_ch) {
        this.point_1_ch = point_1_ch;
    }

    public Integer getPoint_2_ch() {
        return point_2_ch;
    }

    public void setPoint_2_ch(Integer point_2_ch) {
        this.point_2_ch = point_2_ch;
    }

    public Integer getPoint_3_ch() {
        return point_3_ch;
    }

    public void setPoint_3_ch(Integer point_3_ch) {
        this.point_3_ch = point_3_ch;
    }

    public Integer getPoint_4_ch() {
        return point_4_ch;
    }

    public void setPoint_4_ch(Integer point_4_ch) {
        this.point_4_ch = point_4_ch;
    }

    public String getActivity_1_ch_user() {
        return activity_1_ch_user;
    }

    public void setActivity_1_ch_user(String activity_1_ch_user) {
        this.activity_1_ch_user = activity_1_ch_user;
    }

    public String getActivity_2_ch_user() {
        return activity_2_ch_user;
    }

    public void setActivity_2_ch_user(String activity_2_ch_user) {
        this.activity_2_ch_user = activity_2_ch_user;
    }

    public String getActivity_3_ch_user() {
        return activity_3_ch_user;
    }

    public void setActivity_3_ch_user(String activity_3_ch_user) {
        this.activity_3_ch_user = activity_3_ch_user;
    }

    public String getActivity_4_ch_user() {
        return activity_4_ch_user;
    }

    public void setActivity_4_ch_user(String activity_4_ch_user) {
        this.activity_4_ch_user = activity_4_ch_user;
    }

    public String getComment_tr() {
        return comment_tr;
    }

    public void setComment_tr(String comment_tr) {
        this.comment_tr = comment_tr;
    }

    public String getActivity_1_tr() {
        return activity_1_tr;
    }

    public void setActivity_1_tr(String activity_1_tr) {
        this.activity_1_tr = activity_1_tr;
    }

    public String getActivity_2_tr() {
        return activity_2_tr;
    }

    public void setActivity_2_tr(String activity_2_tr) {
        this.activity_2_tr = activity_2_tr;
    }

    public String getActivity_3_tr() {
        return activity_3_tr;
    }

    public void setActivity_3_tr(String activity_3_tr) {
        this.activity_3_tr = activity_3_tr;
    }

    public Integer getPoint_1_tr() {
        return point_1_tr;
    }

    public void setPoint_1_tr(Integer point_1_tr) {
        this.point_1_tr = point_1_tr;
    }

    public Integer getPoint_2_tr() {
        return point_2_tr;
    }

    public void setPoint_2_tr(Integer point_2_tr) {
        this.point_2_tr = point_2_tr;
    }

    public Integer getPoint_3_tr() {
        return point_3_tr;
    }

    public void setPoint_3_tr(Integer point_3_tr) {
        this.point_3_tr = point_3_tr;
    }

    public String getActivity_1_tr_user() {
        return activity_1_tr_user;
    }

    public void setActivity_1_tr_user(String activity_1_tr_user) {
        this.activity_1_tr_user = activity_1_tr_user;
    }

    public String getActivity_2_tr_user() {
        return activity_2_tr_user;
    }

    public void setActivity_2_tr_user(String activity_2_tr_user) {
        this.activity_2_tr_user = activity_2_tr_user;
    }

    public String getActivity_3_tr_user() {
        return activity_3_tr_user;
    }

    public void setActivity_3_tr_user(String activity_3_tr_user) {
        this.activity_3_tr_user = activity_3_tr_user;
    }

    public String getActivity_tr_time() {
        return activity_tr_time;
    }

    public void setActivity_tr_time(String activity_tr_time) {
        this.activity_tr_time = activity_tr_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }

    public Date getUpdate_time_user() {
        return update_time_user;
    }

    public void setUpdate_time_user(Date update_time_user) {
        this.update_time_user = update_time_user;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
