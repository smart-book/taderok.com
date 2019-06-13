package com.taderok.taderok.Service;

import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String username;

    public String getLogedUser(HttpServletRequest httpServletRequest){
        HttpSession httpSession = httpServletRequest.getSession();
        SecurityContext securityContext= (SecurityContext) httpSession.getAttribute("SPRING_SECURITY_CONTEXT");

        this.username = securityContext.getAuthentication().getName();
        return username;
    }

    public int getUserId(){
        User u=userRepository.findByEmail(this.username);
        return u.getId();

    }
}
