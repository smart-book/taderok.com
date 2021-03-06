package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Etudiant;

import com.taderok.taderok.Entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User,Long> {

    User findByEmail(String email);
    List<User> findAllByRole(String role);
    User findByEmailIgnoreCase(String username);

}
