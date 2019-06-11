package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
