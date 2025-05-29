package com.example.bugtracker.controller;

import com.example.bugtracker.model.Comment;
import com.example.bugtracker.repository.BugRepository;
import com.example.bugtracker.repository.UserRepository;
import com.example.bugtracker.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200") // or use global CorsConfig
public class CommentController {

    private final CommentRepository commentRepository;
    private final BugRepository bugRepository;
    private final UserRepository userRepository;

    // GET all comments for a bug
    @GetMapping("/bug/{bugId}")
    public List<Comment> getCommentsForBug(@PathVariable Long bugId) {
        return commentRepository.findByBugId(bugId);
    }

    // POST new comment
    @PostMapping
    public Comment addComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }
}
