package com.nmrmasakazu.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.repository.UserRepository;

/**
 * ユーザ情報に関係する情報を扱うクラス
 */
@Service
public class MyUserDetails implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    /**
     * ユーザ名を取得してデータ取得をカスタマイズする
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("ユーザ名: " + username + "は存在しません");
        }

        return org.springframework.security.core.userdetails.User
                .withUsername(username)
                .password(user.getPassword())
                .authorities(user.getRoles())
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .build();
    }
}
