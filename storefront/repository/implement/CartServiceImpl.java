/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.repository.implement;

import com.g2academy.tokoshop.entity.Cart;
import com.g2academy.tokoshop.entity.CartItem;
import com.g2academy.tokoshop.entity.Product;
import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.model.AddToCart;
import com.g2academy.tokoshop.repository.CartRepository;
import com.g2academy.tokoshop.repository.CartService;
import com.g2academy.tokoshop.repository.ProductRepository;
import com.g2academy.tokoshop.repository.UserRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ALDIN RISQI
 */
@Service
public class CartServiceImpl implements CartService {

    private static final Logger LOG = LoggerFactory.getLogger(CartServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Override
    @Transactional
    public void addToCart(String userName, AddToCart addToCart) {
        User user = userRepository.getUserByName(userName);

        Cart cart
                = cartRepository.findCartByStatusAndUser("ACTIVE", user);

        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
            cart.setStatus("ACTIVE");
            List<CartItem> cartItem = new ArrayList<>();
            cart.setCartItem(cartItem);
        }
        Product product
                = productRepository.findById(addToCart.getIdProduct()).get();

        if (product != null) {
            CartItem item = new CartItem();
            item.setCart(cart);
            item.setPrice(product.getPrice());
            item.setQuantity(addToCart.getQuantity());
            item.setProduct(product);
            cart.getCartItem().add(item);

            Integer stock = product.getStock() - item.getQuantity();
            if (stock >= 0) {
                product.setStock(stock);
                productRepository.save(product);
                cartRepository.save(cart);
            }

        }

//        Product product = new Product();
//        AddToCart addCart = new AddToCart();
    }

    @Override
    @Transactional
    public void cart(String userName) {
        User user = userRepository.getUserByName(userName);
        Cart cart
                = cartRepository.findCartByStatusAndUser("ACTIVE", user);

        if (cart != null) {
            cart.setStatus("PROCESSED");
            cart.setTransactionDate(new Date());

            LOG.info("Sending message to AMQP");
            rabbitTemplate.convertAndSend(AppConfig.QUEUE_NAME, cart);

            cartRepository.save(cart);
        }
    }

    @Override
    @Transactional
    public void addToCart(String userName) {
        
    }

    

}
