
package com.g2academy.tokoshop.repository;

import com.g2academy.tokoshop.entity.User;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User getUserByName(String userName);

    User getUserByName(User user);

    List<User> findAll();

}
