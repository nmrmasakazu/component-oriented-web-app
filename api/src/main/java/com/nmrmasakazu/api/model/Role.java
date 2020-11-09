package com.nmrmasakazu.api.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * ロールの種類を定義
 */
public enum Role implements GrantedAuthority {
    ROLE_ADMIN, ROLE_CLIENT, ROLE_NONE;

    public String getAuthority() {
        return name();
    }

}
