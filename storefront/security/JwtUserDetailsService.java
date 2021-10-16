/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.security;

import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.repository.UserRepository;
import java.util.Collections;
import static org.apache.tomcat.jni.User.username;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author ALDIN RISQI
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.getUserByName(username);
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getName(), user.getPassword(), Collections.emptyList());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

}
