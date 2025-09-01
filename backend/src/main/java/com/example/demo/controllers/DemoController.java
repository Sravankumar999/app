package com.example.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.DemoModel;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class DemoController {

    @GetMapping("/")
    public DemoModel defaultMethod() {
        return new DemoModel("name", 18);
    }
    
}
