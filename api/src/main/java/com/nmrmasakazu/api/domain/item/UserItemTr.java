package com.nmrmasakazu.api.domain.item;

import com.nmrmasakazu.api.model.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_item_tr")
public class UserItemTr {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int item_id;

    @Column(nullable = false)
    private int user_id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false, insertable = false, updatable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="item_id", nullable=false, insertable = false, updatable = false)
    private ItemTr itemTr;

    public UserItemTr() {
    }

    public UserItemTr(int item_id, int user_id, ItemTr itemTr, User user) {
        this.item_id = item_id;
        this.user_id = user_id;
        this.itemTr = itemTr;
        this.user = user;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public int getItem_id() {
        return item_id;
    }
    public void setItem_id(int item_id) {
        this.item_id = item_id;
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

    public ItemTr getItemTr() {
        return itemTr;
    }
    public void setItemTr(ItemTr itemTr) {
        this.itemTr = itemTr;
    }
}
