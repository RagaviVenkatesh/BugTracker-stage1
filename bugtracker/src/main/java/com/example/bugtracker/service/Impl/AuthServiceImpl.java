package com.example.bugtracker.service.Impl;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.bugtracker.dto.AuthRequest;
import com.example.bugtracker.model.User;
import com.example.bugtracker.repository.UserRepository;
import com.example.bugtracker.service.AuthService;
import com.example.bugtracker.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepo;
    private final JwtUtil jwtUtil;

    @Override
    public Map<String, String> login(AuthRequest request) {
        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return Map.of("token", token, "email", user.getEmail());
    }

    @Override
    public Map<String, String> register(User user) {
        userRepo.save(user); // Optional: check if user already exists
        String token = jwtUtil.generateToken(user.getEmail());
        return Map.of("token", token, "email", user.getEmail());
    }

}
