package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.DemoModel;
import com.example.demo.services.DemoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/model")
public class DemoController {
    
    @Autowired
    private DemoService svc;

    @PostMapping("/add")
    public Map<String, String> addModel(@RequestBody DemoModel model) {
        return svc.addModel(model);
    }

    @GetMapping("/list")
    public List<DemoModel> list(){
        List<DemoModel> models=svc.list();
        return models;
    }
}
