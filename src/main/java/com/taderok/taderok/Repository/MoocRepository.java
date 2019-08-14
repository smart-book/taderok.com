package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Mooc;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoocRepository extends CrudRepository<Mooc,Long> {
    List<Mooc> findAllByArchive(boolean archive);
}
