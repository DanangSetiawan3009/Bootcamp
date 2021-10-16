/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.controller;

import com.g2academy.tokoshop.TokoshopApplication;
import com.g2academy.tokoshop.entity.Cart;
import com.g2academy.tokoshop.entity.CartItem;
import com.g2academy.tokoshop.entity.Product;
import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.model.AddToCart;
import com.g2academy.tokoshop.repository.CartItemRepository;
import com.g2academy.tokoshop.repository.CartRepository;
import com.g2academy.tokoshop.repository.CartService;
import com.g2academy.tokoshop.repository.ProductRepository;
import com.g2academy.tokoshop.repository.UserRepository;
import io.jsonwebtoken.Claims;
import java.security.Principal;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CheckOutController {
    
    public static final String STATUS_ACTIVE = "ACTIVE";
    public static final String STATUS_PROCESED = "PROCESED";
    
    @Autowired
    public CartRepository cartRepository;
    
    @Autowired
    public UserRepository userRepository;
    
    @Autowired
    public ProductRepository productRepository;
    
    @Autowired
    public CartItemRepository cartItemRepository;
    
    @Autowired
    public RabbitTemplate rabbitTemplate;
    
    
    @Autowired
    private CartService cartService;
    
    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);
        // get cart status ACTIVE
        Cart activeCart = cartRepository.findCartByStatusAndUser(STATUS_ACTIVE, user);
        if(activeCart != null) {
            activeCart.setStatus(STATUS_PROCESED);
            cartRepository.save(activeCart);
            //send message to RabbitMQ
            rabbitTemplate.convertAndSend(
                    TokoshopApplication.TOPIC_EXCHANGE_NAME,
                    "tokoshop.checkout",
                    "sending cart data with id " + activeCart.getId());
            return ResponseEntity.ok("CHECKOUT BERHASIL");
        }
        return ResponseEntity.badRequest().body("no active cart for this user");
                
    }
    
    @PostMapping("/add-to-cart")
    public ResponseEntity<String> addCart(
            @RequestBody AddToCart addToCart){
        
        Integer idC = addToCart.getCartId();
        Integer idP = addToCart.getIdProduct();
        
        CartItem cartItem = new CartItem();
        Cart cart = cartRepository.findById(idC).get();
        Product product = productRepository.findById(idP).get();
        cartItem.setCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(addToCart.getQuantity());
        
        cartItemRepository.save(cartItem);
        return ResponseEntity.ok("UPDATE DATA BERHASIL");
//       Product product = new Product();
//        AddToCart addCart = new AddToCart();
        
//        Integer stock = product.getStock() - addCart.getQuantity();
//        if(product.getStock() > 0){
//            
//        }
//        product.setStock(stock);
//        
//        cartService.addToCart(getUserName(principal), addToCart);
//        return "ok";
    }
    
    private  String getUserName(Principal principal){
        UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) principal;
        Claims user = (Claims) token.getPrincipal();
        return user.getSubject();
    }
    
}
