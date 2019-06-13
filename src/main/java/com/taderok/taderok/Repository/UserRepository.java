package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {

    User findByEmail(String email);
}
