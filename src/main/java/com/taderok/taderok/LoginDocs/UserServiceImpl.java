package com.taderok.taderok.LoginDocs;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Parent;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.EtudiantRepository;
import com.taderok.taderok.Repository.ParentRepository;
import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.UserRepository;
import com.taderok.taderok.Util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private ParentRepository parentRepository;
    @Autowired
    private ProfRepository profRepository;


    @Override
    public User save(User user) {
        String password = PasswordUtil.getPasswordHash(user.getPassword());
        user.setPassword(password);

        return userRepository.save(user);
    }

    @Override
    public Etudiant registerEtudiant(Etudiant etudiant) {
        String password = PasswordUtil.getPasswordHash(etudiant.getPassword());
        etudiant.setPassword(password);
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "0123456789"
                ;

        // create StringBuffer size of AlphaNumericString
        StringBuilder sb = new StringBuilder(8);

        for (int i = 0; i < 8; i++) {

            // generate a random number between
            // 0 to AlphaNumericString variable length
            int index
                    = (int)(AlphaNumericString.length()
                    * Math.random());

            // add Character one by one in end of sb
            sb.append(AlphaNumericString
                    .charAt(index));
        }


        String generatedString = sb.toString();
        etudiant.setCodeEnfant(generatedString);
        etudiant.setPaiement(false);
        etudiant.setRole("Etudiant");
        etudiantRepository.save(etudiant);
        return etudiantRepository.save(etudiant);
    }

    @Override
    public Parent registerParent(Parent parent) {
        String password = PasswordUtil.getPasswordHash(parent.getPassword());
        parent.setPassword(password);
        parent.setRole("Parent");
        return parentRepository.save(parent);
    }

    @Override
    public Prof registerProf(Prof prof) {
        String password = PasswordUtil.getPasswordHash(prof.getPassword());
        prof.setPassword(password);
        prof.setRole("Prof");
        return profRepository.save(prof);
    }

    @Override
    public void desactiverCompte(Long id) {
        User  u = userRepository.findById(id).orElse(null);
        u.setEnabled(false);
        userRepository.save(u);
    }

    @Override
    public void activerCompte(Long id) {
        User  u = userRepository.findById(id).orElse(null);
        u.setEnabled(true);
        userRepository.save(u);
    }

    @Override
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmailIgnoreCase(email);
    }


}
