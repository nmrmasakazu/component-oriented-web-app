package com.nmrmasakazu.api.auth.service;

import com.nmrmasakazu.api.auth.dto.TokenDTO;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nmrmasakazu.api.exception.CustomException;
import com.nmrmasakazu.api.auth.model.User;
import com.nmrmasakazu.api.auth.repository.UserRepository;
import com.nmrmasakazu.api.auth.security.JwtTokenProvider;

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
    public TokenDTO signin(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String token = jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles());
            return new TokenDTO(token);
        } catch (AuthenticationException e) {
            throw new CustomException("ユーザ名またはパスワードが有効ではありません", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * サインアップ
     */
    public TokenDTO signup(User user) {
        String username = user.getUsername();

        if (userRepository.existsByUsername(user.getUsername())) {
            throw new CustomException("すでに登録済みのユーザ名です", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (user.getPassword().length() < 8) {
            throw new CustomException("パスワードは8文字以上にしてください", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            String token =  jwtTokenProvider.createToken(user.getUsername(), user.getRoles());
            return new TokenDTO(token);
        } catch (ConstraintViolationException e) {
            for (ConstraintViolation cv : e.getConstraintViolations()) {
                throw new CustomException(cv.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        throw new CustomException("Something went wrong", HttpStatus.UNPROCESSABLE_ENTITY);
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

    public List<User> findClientUsers() {
        return userRepository.findClientUsers();
    }

}

