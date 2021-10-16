
package com.g2academy.tokoshop.dao;

import com.g2academy.tokoshop.dao.rowmapper.ProductRowMapper;
import com.g2academy.tokoshop.entity.Product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class ProductDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private ProductRowMapper productRowMapper = new ProductRowMapper();

    public List<Product> getProducts() {

        return jdbcTemplate.query(
                "select * from t_product",
                productRowMapper);
    }

    public Product getProductById(Integer id) {
       try {
        return jdbcTemplate.queryForObject(
                "select * from t_product where id = ?",
                productRowMapper, id);
       } catch (DataAccessException ex){
       }
       return null;
    }

    public void save(Product product) {
        if (product.getId() == null) {
            jdbcTemplate.update(
                    "insert into t_product(name, price, id_category) values(?, ?, ?)",
                    product.getName(), product.getPrice(), product.getCategoryId());

        } else {
            jdbcTemplate.update(
                    "update t_product set name = ?, price = ?, id_category = ? where id = ?",
                    product.getName(), product.getPrice(), product.getCategoryId(), product.getId());
        }
    }

    public void delete(Integer id) {
        jdbcTemplate.update("delete from t_product where id =?, id");
    }

    public void delete() {
        jdbcTemplate.update("delete from t_product");
    }
}
