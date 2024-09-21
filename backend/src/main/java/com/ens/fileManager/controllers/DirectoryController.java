package com.ens.fileManager.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/dirApi")
public class DirectoryController {
    
    @GetMapping("/listar")
    public String listDirectories() {
        return "retorna diretorios";
    }

    @PostMapping()
    public String postMethodName() {
        
        return "entity";
    }
    
}
