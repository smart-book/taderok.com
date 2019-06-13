package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Forum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumRepository extends CrudRepository<Forum,Integer> {
}
