package com.community.vuespring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/employees")

public class ServicesController {
    @GetMapping("/test")
    public String test(){
        return "이건 서비스";
    }
}