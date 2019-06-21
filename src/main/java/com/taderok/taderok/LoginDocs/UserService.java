package com.taderok.taderok.LoginDocs;

import com.taderok.taderok.Entity.User;

import java.util.List;

public interface UserService {
    User save(User user);

    List<User> findAll();

    User getUserByEmail(String email);
}
