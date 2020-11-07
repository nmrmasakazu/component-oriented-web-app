package com.nmrmasakazu.api.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nmrmasakazu.api.exception.CustomException;
import com.nmrmasakazu.api.model.User;
import com.nmrmasakazu.api.repository.UserRepository;
import com.nmrmasakazu.api.security.JwtTokenProvider;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * サインイン
     */
    public String signin(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            return jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles());
        } catch (AuthenticationException e) {
            throw new CustomException("ユーザ名またはパスワードが有効ではありません", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * サインアップ
     */
    public String signup(User user) {
        // すでにユーザ名が存在しないことのチェック
        if (!userRepository.existsByUsername(user.getUsername())) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return jwtTokenProvider.createToken(user.getUsername(), user.getRoles());
        } else {
            throw new CustomException("すでにユーザ名が使用されています", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * ユーザの削除
     */
    public void delete(String username) {
        userRepository.deleteByUsername(username);
    }

    /**
     * ユーザの検索
     */
    public User search(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new CustomException("ユーザが存在しません", HttpStatus.NOT_FOUND);
        }
        return user;
    }

    public User whoami(HttpServletRequest req) {
        return userRepository.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
    }

    public String refresh(String username) {
        return jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles());
    }

}

