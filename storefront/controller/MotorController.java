package com.g2academy.tokoshop.controller;

import com.g2academy.tokoshop.entity.Motor;
import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.model.Stock;
import com.g2academy.tokoshop.repository.MotorRepository;
import com.g2academy.tokoshop.repository.UserRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class MotorController {

    @Autowired
    private MotorRepository motorRepository;

    // GET ALL PRODUCT
    @GetMapping("/motors")
    public ResponseEntity<List<Motor>> getMotors() {
        Iterable<Motor> motors = motorRepository.findAll();
        List<Motor> motorList = new ArrayList<>();
        for (Motor motor : motors) {
            motorList.add(motor);
        }
        return ResponseEntity.ok(motorList);
    }
}
