package com.g2academy.tokoshop.dao.rowmapper;

import com.g2academy.tokoshop.entity.Product;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;


public class ProductRowMapper implements RowMapper<Product> {

    @Override
    public Product mapRow(ResultSet rs, int i) throws SQLException {

        Product product = new Product();
        product.setId(rs.getInt("id"));
        product.setName(rs.getString("name"));
        product.setPrice(rs.getInt("price"));
        product.setCategoryId(rs.getInt("id_category"));
        return product;
    }

}
