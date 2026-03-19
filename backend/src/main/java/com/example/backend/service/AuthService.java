package com.example.backend.service;

import com.example.backend.domain.User;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.exception.UnauthorizedException;
import com.example.backend.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AuthService {
    private final UserMapper userMapper;

    public AuthService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public LoginResponse login(LoginRequest request) {
        if (request.username() == null || request.password() == null) {
            throw new UnauthorizedException("用户名或密码错误");
        }

        User user = userMapper.findByUsername(request.username());
        if (user == null || !request.password().equals(user.getPassword())) {
            throw new UnauthorizedException("用户名或密码错误");
        }

        return new LoginResponse(UUID.randomUUID().toString(), user.getUsername());
    }
}
