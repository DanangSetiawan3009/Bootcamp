package com.g2academy.tokoshop.controller;

import com.g2academy.tokoshop.entity.Product;
import com.g2academy.tokoshop.repository.ProductSearchRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductSearchController {
    @Autowired
    private ProductSearchRepository productSearchRepository;
    
    // GET BY SEARCH
    // /search?q=samsung&page=1&size=20&sort=PRICE_DESC
    @GetMapping("/search")
    public ResponseEntity<List<Product>> search(
            @RequestParam String q,
            @RequestParam Integer size,
            @RequestParam Integer page,
            @RequestParam String sort) {
        // sort can only have 3 possible values : PRICE_ASC, PRICE_DESC, TITTLE
        Pageable pageable;
        if ("PRICE_ASC".equals(sort)) {
            pageable =  PageRequest.of(page, size, Sort.by("price"));
        } else if ("PRICE_DESC".equals(sort)) {
            pageable =  PageRequest.of(page, size,
                    Sort.by(Sort.Direction.DESC, "price"));
        } else if ("TITLE".equals(sort)) {
            pageable = PageRequest.of(page, size,
                    Sort.by("name"));
        } else {
            pageable = PageRequest.of(page, size);
        }
        List<Product> products
                = productSearchRepository.findByNameContains(q, pageable);
        for (Product product : products) {
            
        }
        return ResponseEntity.ok(new ArrayList<>(products));
    }

}
