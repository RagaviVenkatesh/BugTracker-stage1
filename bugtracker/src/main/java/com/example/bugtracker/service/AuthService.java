package com.example.bugtracker.service;

import java.util.Map;

import com.example.bugtracker.dto.AuthRequest;
import com.example.bugtracker.model.User;

public interface AuthService {
    Map<String, String> register(User user);

    Map<String, String> login(AuthRequest request);
}
