package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role,Integer> {
    public Role findByRole(String role);
}
