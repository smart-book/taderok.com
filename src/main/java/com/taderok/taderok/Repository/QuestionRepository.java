package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Question;
import com.taderok.taderok.Entity.Quiz;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question,Integer> {
    List<Question> findAllByQuiz(Quiz quiz);
}
