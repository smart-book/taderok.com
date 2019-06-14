package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Feedback;
import org.springframework.data.repository.CrudRepository;

public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {
}
