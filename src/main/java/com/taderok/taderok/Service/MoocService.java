package com.taderok.taderok.Service;

import com.taderok.taderok.Entity.Mooc;
import com.taderok.taderok.Repository.MoocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MoocService {

    @Autowired
    private MoocRepository moocRepository;

    public long addMooc(Mooc mooc){
        Date date = new Date();
        mooc.setDate(date);
        mooc.setArchive(false);
        moocRepository.save(mooc);
        return mooc.getId();
    }

    public List<Mooc> getAllMooc(){
        return moocRepository.findAllByArchive(false);
    }

    public List<Mooc> getAllMoocArchive(){
        return moocRepository.findAllByArchive(true);
    }

    public Mooc getOneMooc(Long id){
        return moocRepository.findById(id).orElse(null);
    }

    public void updateMooc(Mooc mooc, long id){
        Mooc m = moocRepository.findById(id).orElse(null);
        m.setMatiere(mooc.getMatiere());
        m.setNiveau(mooc.getNiveau());
        m.setTitre(mooc.getTitre());
        moocRepository.save(m);
    }

    public void archiverMooc(long id){
        Mooc m = moocRepository.findById(id).orElse(null);
        m.setArchive(true);
        moocRepository.save(m);
    }

}
