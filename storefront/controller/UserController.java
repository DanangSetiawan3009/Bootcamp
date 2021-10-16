/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.controller;

import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.model.Login;
import com.g2academy.tokoshop.model.Registration;
import com.g2academy.tokoshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ALDIN RISQI
 */
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    
    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
    
// POST LOGIN
    @PostMapping("/login")
    public ResponseEntity<String> processUserLogin(
            @RequestBody Login login) {

        User user = userRepository.getUserByName(login.getUserName());
        if(user != null && user.getPassword().equals(login.getPassword())) {
            return ResponseEntity.ok("LOGIN BERHASIL");
        }
        return ResponseEntity.ok("error");
    }
    // POST REGISTER
    @PostMapping("/register")
    public ResponseEntity<String> proccesRegistration(
            @RequestBody Registration reg) {
        User user = new User();
        user.setName(reg.getUserName());
        // encrypt using Bcrypt
        user.setPassword(bcrypt.encode(reg.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("REGISTER BERHASIL");
    }
    
    
}
