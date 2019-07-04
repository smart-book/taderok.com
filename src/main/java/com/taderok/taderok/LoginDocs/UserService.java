package com.taderok.taderok.LoginDocs;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Parent;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.User;

import java.util.List;

public interface UserService {
    User save(User user);
    Etudiant registerEtudiant(Etudiant etudiant);
    Parent registerParent(Parent parent);
    Prof registerProf(Prof prof);
    void desactiverCompte(Long id);
    void activerCompte(Long id);
    Etudiant updateEtudiant(Long id,Etudiant etudiant);
    Parent updateParent(Long id,Parent parent);
    Prof updateProf(Long id,Prof prof);


    List<User> findAll();

    List<User> findAllByRole(String role);

    User getUserByEmail(String email);
}
