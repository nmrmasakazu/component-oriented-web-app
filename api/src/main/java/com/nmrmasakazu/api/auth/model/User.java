package com.nmrmasakazu.api.auth.model;

import com.nmrmasakazu.api.domain.Promise;
import com.nmrmasakazu.api.domain.item.UserItemCh;
import com.nmrmasakazu.api.domain.item.UserItemTr;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;

/**
 * 認証するユーザの定義
 */
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(min = 4, max = 255, message = "ユーザ名は4文字以上255文字以下にしてください")
    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;

    @OneToMany(mappedBy = "user")
    private List<Promise> promiseList;

    @OneToMany(mappedBy = "user")
    private List<UserItemCh> userItemChList;

    @OneToMany(mappedBy = "user")
    private List<UserItemTr> userItemTrList;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    private List<Promise> getPromiseList() {
        return promiseList;
    }

    private List<UserItemCh> getUserItemChList() {
        return userItemChList;
    }

    private List<UserItemTr> getUserItemTrList() {
        return userItemTrList;
    }

    // カスタマイズ
    // 循環参照の回避 https://qiita.com/frost_star/items/855e7fb52dca9de7566e
    // getXXXはprivateにしましょう
    public List<Promise> acquirePromiseList() {
        List<Promise> promises = getPromiseList();
        for (int i=0; i < promises.size(); i++) {
            promises.get(i).getUser().setPassword(null);
        }
        return promises;
    }
    public List<UserItemTr> acquireUserItemTrList() {
        return getUserItemTrList();
    }
    public List<UserItemCh> acquireUserItemChList() {
        return getUserItemChList();
    }

}
