package com.example.bugtracker.service;

import com.example.bugtracker.model.Bug;

import java.util.List;

public interface BugService {
    List<Bug> getAllBugs();

    Bug getBugById(Long id);

    Bug createBug(Bug bug);

    Bug updateBugStatus(Long id, String status);
}
