/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.model.AddToCart;

/**
 *
 * @author ALDIN RISQI
 */
public interface CartService {
    
    public void addToCart(String userName);
    
    public void cart(String userName);

    public void addToCart(String userName, AddToCart addToCart);
    
}
