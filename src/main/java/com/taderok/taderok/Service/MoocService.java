package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Mooc;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.MoocRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MoocService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MoocRepository moocRepository;

    public long addMooc(Mooc mooc){
        Date date = new Date();
        mooc.setDate(date);
        moocRepository.save(mooc);
        return mooc.getId();
    }
}
