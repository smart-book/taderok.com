package com.taderok.taderok.Repository;

        import com.taderok.taderok.Entity.Reponses;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface ReponseRepository extends CrudRepository<Reponses,Integer> {
}
