package com.taderok.taderok.Service.AdminServices;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Repository.ReclamationRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReclamationAdminService
{
    @Autowired
    ReclamationRepository reclamationRepository;
    @Autowired
    private HelloResource helloResource;
    @Autowired
    private UserRepository userRepository;

    public List<Reclamation> getAllReclamation()
    {
        return (List<Reclamation>) reclamationRepository.findAll();
    }

    public List<Reclamation> AfficherReclamationNontraite()
    {
        return (List<Reclamation>) reclamationRepository.findAllByEtat(false);
    }

    public List<Reclamation> AfficherReclamationTraite()
    {
        return (List<Reclamation>) reclamationRepository.findAllByEtat(true);
    }

    public Reclamation traiterReclamation(int id)
    {
        Reclamation reclamation = reclamationRepository.findById(id).orElse(null);
        reclamation.setEtat(true);
        return reclamationRepository.save(reclamation);
    }

    //public List<Reclamation> AfficherReclamationParType(TypeReclamation type)
    //{
      //  return (List<Reclamation>) reclamationRepository.findAllByType(type);
    //}

    public List<Reclamation> getAllReclamationOrderByDate()
    {
        return (List<Reclamation>) reclamationRepository.findAllByOrderByDateDesc();
    }

}
