package com.example.bugtracker.service.Impl;

import com.example.bugtracker.model.Bug;
import com.example.bugtracker.repository.BugRepository;
import com.example.bugtracker.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BugServiceImpl implements BugService {

    private final BugRepository bugRepository;

    @Override
    public List<Bug> getAllBugs() {
        return bugRepository.findAll();
    }

    @Override
    public Bug getBugById(Long id) {
        return bugRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Bug not found with id: " + id));
    }

    @Override
    public Bug createBug(Bug bug) {
        bug.setStatus("Open"); // default status
        return bugRepository.save(bug);
    }

    @Override
    public Bug updateBugStatus(Long id, String status) {
        Bug bug = getBugById(id);
        bug.setStatus(status);
        return bugRepository.save(bug);
    }
}
