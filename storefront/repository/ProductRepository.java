
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.entity.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;


public interface ProductRepository extends CrudRepository<Product, Integer> {
    
    @Override
    @Cacheable(value = "getProducts")
    public Iterable<Product>findAll();
    
    @Override
    @Cacheable(value = "getProductById", key = "#id")
    public Optional<Product>findById(Integer id);

    public List<Product> findByNameContains(String q, Pageable pageable);

}
