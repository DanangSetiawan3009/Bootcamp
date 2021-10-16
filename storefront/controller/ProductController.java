package com.g2academy.tokoshop.controller;

import com.g2academy.tokoshop.entity.Product;
import com.g2academy.tokoshop.entity.User;
import com.g2academy.tokoshop.model.Stock;
import com.g2academy.tokoshop.repository.ProductRepository;
import com.g2academy.tokoshop.repository.UserRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    // GET ALL PRODUCT
    @GetMapping("/products/")
    public ResponseEntity<List<Product>> getProducts() {
        Iterable<Product> products = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (Product product : products) {
            productList.add(product);
        }
        return ResponseEntity.ok(productList);
    }

    // GET PRODUCT BY ID
    @GetMapping("/product/id/{id}")
    public ResponseEntity<Product> getProductById(
            @PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok(productRepository.findById(id).get());
    }

//    // GET PRODUCT BY CATEGORY
//    @GetMapping("/product/")
//    public ResponseEntity<List<Product>> search(
//            @RequestParam String q,
//            @RequestParam Integer size,
//            @RequestParam Integer page,
//            @RequestParam Integer category,
//            @RequestParam String sort) {
//        // sort can only have 3 possible values : PRICE_ASC, PRICE_DESC, TITTLE
//        Pageable pageable;
//        if ("CATEGORY".equals(sort)) {
//            pageable = PageRequest.of(page, size,
//                    Sort.by("id_category"));
//        } else if ("PRICE_ASC".equals(sort)) {
//            pageable = PageRequest.of(page, size, Sort.by("price"));
//        } else if ("PRICE_DESC".equals(sort)) {
//            pageable = PageRequest.of(page, size,
//                    Sort.by(Sort.Direction.DESC, "price"));
//        } else if ("TITLE".equals(sort)) {
//            pageable = PageRequest.of(page, size,
//                    Sort.by("name"));
//        } else {
//            pageable = PageRequest.of(page, size);
//        }
//        List<Product> products
//                = productRepository.findByNameContains(q, pageable);
//        return ResponseEntity.ok(products);
//    }

    // POST PRODUCT
    @PostMapping("/product/")
    public ResponseEntity<String> saveProduct(
            @RequestBody Product product,
            Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);

        product.setUser(user);
        productRepository.save(product);

        return ResponseEntity.ok("BERHASIL");
    }

    // UPDATE PRODUCT WITH ID 
    @PutMapping("/product/{id}")
    public ResponseEntity<String> updateProduct(
            @RequestBody Product product,
            Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);
        if (user != null) {
            Product p = productRepository.findById(product.getId()).get();
            if (p != null
                    && p.getUser() != null
                    && user.getId().equals(p.getUser().getId())) {
                p.setCategoryId(product.getCategoryId());
                p.setName(product.getName());
                p.setPrice(product.getPrice());
                p.setUser(user);
                productRepository.save(product);
                return ResponseEntity.ok("BERHASIL");
            }
        }
        return ResponseEntity.badRequest().body("invalid parameter or product is not allowed to update");
    }

    // update stock product with id 3 (only stock)
    @PutMapping("/stock/{id}")
    public ResponseEntity<String> updateStock(
            @PathVariable Integer id,
            @RequestBody Stock stock,
            Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);
        if (user != null) {
            Product product = productRepository.findById(id).get();
            if (product != null
                    && product.getUser() != null
                    && product.getUser().getId().equals(user.getId()));
            product.setStock(stock.getStock());
            productRepository.save(product);
            return ResponseEntity.ok("updated stock BERHASIL");
        }
        return ResponseEntity.badRequest().body("invalid parameter or product is not allowed to update");
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<String> deletePersonById(
            @PathVariable(name = "id") Integer id,
            Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);
        if (user != null) {
            Product product = productRepository.findById(id).get();
            if (product != null
                    && product.getUser() != null
                    && product.getUser().getId().equals(user.getId())) {

                productRepository.deleteById(id);
                return ResponseEntity.ok("BERHASIL");
            }
        }
        return ResponseEntity.badRequest().body("invalid parameter or product is not allowed to update");
    }
}
