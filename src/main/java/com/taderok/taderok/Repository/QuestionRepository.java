package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Questions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends CrudRepository<Questions,Integer> {
}
