
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.entity.Cart;
import com.g2academy.tokoshop.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart, Integer> {

public Cart findCartByStatusAndUser(String status, User user);    
}
