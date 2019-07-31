package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.MoocVideo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoocVideoRepository extends CrudRepository<MoocVideo,Long> {
}
