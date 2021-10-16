
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.entity.Cart;
import com.g2academy.tokoshop.entity.CartItem;
import com.g2academy.tokoshop.entity.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface CartItemRepository extends CrudRepository<CartItem, Integer> {

    public Optional<CartItem> findByProduct (Product product);
    public List<CartItem> findCartItemByCart (Cart cart);
    
    
}
