package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.CommentaireForum;
import com.taderok.taderok.Entity.Forum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentaireForumRepository extends CrudRepository<CommentaireForum,Integer> {

    List<CommentaireForum> findAllByForum(Forum forum);
}
