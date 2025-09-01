package com.example.demo.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.DemoModel;
import com.example.demo.repository.DemoRepository;

@Service
public class DemoService {

    @Autowired
    private DemoRepository repo;

    public List<DemoModel> list() {
        return repo.findAll();
    }

    public Map<String, String> addModel(DemoModel model) {
        DemoModel savedModel = repo.save(model);
        if (savedModel != null && savedModel.getId() != 0) {
            return Map.of("status", "success", "id", String.valueOf(savedModel.getId()));
        } else {
            return Map.of("status", "failed", "message", "Save operation failed");
        }
    }
}
