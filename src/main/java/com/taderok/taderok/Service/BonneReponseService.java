package com.taderok.taderok.Service;



import com.taderok.taderok.Entity.BonneReponses;
import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Repository.BonneReponsesRepository;
import com.taderok.taderok.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BonneReponseService {


    @Autowired
    private BonneReponsesRepository bonneReponsesRepository;


    public List<BonneReponses> getAllBonneReponses(){
        return (List<BonneReponses>) bonneReponsesRepository.findAll();

    }

    public BonneReponses getBonneReponse(int id){
        return bonneReponsesRepository.findById(id).orElse(null);
    }




}
