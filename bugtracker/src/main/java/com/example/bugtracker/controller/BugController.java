package com.example.bugtracker.controller;

import com.example.bugtracker.model.Bug;
import com.example.bugtracker.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bugs")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200") // or use global CorsConfig
public class BugController {

    private final BugService bugService;

    // GET all bugs
    @GetMapping
    public List<Bug> getAllBugs() {
        return bugService.getAllBugs();
    }

    // GET bug by ID
    @GetMapping("/{id}")
    public Bug getBug(@PathVariable Long id) {
        return bugService.getBugById(id);
    }

    // POST new bug
    @PostMapping
    public Bug createBug(@RequestBody Bug bug) {
        return bugService.createBug(bug);
    }

    // PATCH update bug status
    @PatchMapping("/{id}/status")
    public Bug updateStatus(@PathVariable Long id, @RequestParam String status) {
        return bugService.updateBugStatus(id, status);
    }
}
