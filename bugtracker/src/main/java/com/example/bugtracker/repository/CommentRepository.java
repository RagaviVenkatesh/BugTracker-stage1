package com.example.bugtracker.repository;

import com.example.bugtracker.model.Comment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByBugId(Long bugId); // <-- This enables the method
}
