package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.*;
import com.taderok.taderok.Repository.*;
import org.apache.logging.log4j.util.Chars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Service;

import javax.jws.soap.SOAPBinding;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.nio.charset.Charset;
import java.security.Principal;
import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private ProfRepository profRepository;
    @Autowired
    private ParentRepository parentRepository;
    @Autowired
    private HelloResource helloResource;



    public String username;

    public String getLogedUser(HttpServletRequest httpServletRequest){
        HttpSession httpSession = httpServletRequest.getSession();
        SecurityContext securityContext= (SecurityContext) httpSession.getAttribute("SPRING_SECURITY_CONTEXT");

        this.username = securityContext.getAuthentication().getName();
        return username;
    }


    public int getUserId(Principal principal) {
        System.out.println(principal);
        User u = userRepository.findByEmail(principal.getName());
        return u.getId();
    }

    public int getUserId2(Authentication authentication) {

        authentication.getPrincipal();
        User u = (User)authentication.getPrincipal();
        return u.getId();
    }

    public User getUserFromDb(String email){
        User u=userRepository.findByEmail(email);
        return u;

    }
    public User getUser(int id){
        User u=userRepository.findById(id).orElse(null);
        return u;

    }


    public void registerUser(User user)
    {
         user.setActivated(true);
         userRepository.save(user);
    }
    public void registerEtudiant(Etudiant etudiant)
    {
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
        etudiantRepository.save(etudiant);
    }
    public void registerProf(Prof prof)
    {
        profRepository.save(prof);
    }
    public void registerParent(Parent parent) { parentRepository.save(parent);}



    public void desactiverCompte(int id)
    {
       User  u = userRepository.findById(id).orElse(null);
        u.setActivated(false);
        userRepository.save(u);
    }
    public void activerCompte(int id)
    {
        User  u = userRepository.findById(id).orElse(null);
        u.setActivated(true);
        userRepository.save(u);
    }





    public List<User> getAllUserByRole(String role)
    {
        Role r = roleRepository.findByRole(role);
        return userRepository.findByRoles(r);
    }


  public void affecterRole( int idRole )
   {
       User u = userRepository.findById(helloResource.getIdConnected()).orElse(null);
       Role r = roleRepository.findById(idRole).orElse(null);

       u.setRoles(r);

       userRepository.save(u);

   }
    public void updateUser(User user)
    {
        User f = userRepository.findById(helloResource.getIdConnected()).orElse(null);
        f.getRoles();
        f.getId();
                
        f.setAdresse(user.getAdresse());
        f.setDateNaissance(user.getDateNaissance());
        f.setEmail(user.getEmail());
        f.setNom(user.getNom());
        f.setPrenom(user.getPrenom());
        f.setPassword(user.getPassword());
        f.setSexe(user.getSexe());
        f.setPhoto(user.getPhoto());
        f.setTelephone(user.getTelephone());
        userRepository.save(f);
    }
    public void affectercode(String code)
    {
        System.out.println(code);

        int idEtudiant = 0;
        boolean test = false;
        List<Etudiant> ets = (List<Etudiant>) etudiantRepository.findAll();
        for (Etudiant et:
            ets ) {
                        if(et.getCodeEnfant().equals(code))
                        {
                         test=true;
                         idEtudiant=et.getId();

                        }
        }
        
        Parent p = (Parent) userRepository.findById(helloResource.getIdConnected()).orElse(null);

        if(test==true) {
            Etudiant e = etudiantRepository.findById(idEtudiant).orElse(null);
            e.setParent(p);
            p.getEnfants().add(e);
            System.out.println(e.getCodeEnfant());
            System.out.println(p.getCin());

            etudiantRepository.save(e);
            parentRepository.save(p);
        }



    }

}

