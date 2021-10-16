/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.model;

import com.g2academy.tokoshop.entity.Product;

/**
 *
 * @author ALDIN RISQI
 */
public class AddToCart {
    
    private Integer idProduct;
    
    private Integer quantity;

    private Integer cartId;
    

    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }
    
    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

//    public Product getProduct() {
//       
//    }
    
    
}
