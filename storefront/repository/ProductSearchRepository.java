/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.entity.Product;

import java.util.List;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author ALDIN RISQI
 */
public interface ProductSearchRepository
        extends PagingAndSortingRepository<Product, Integer> {
    
    
    public List<Product> findByNameContains(String name, Pageable pageable);
    
  
}
