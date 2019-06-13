package com.taderok.taderok.Controller;



import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HelloResource {

    @Autowired
    private UserService userService;

    @RequestMapping("/")
    public Map<String,Object> getLogedUser(HttpServletRequest httpServletRequest){
        HttpSession httpSession = httpServletRequest.getSession();
        SecurityContext securityContext= (SecurityContext) httpSession.getAttribute("SPRING_SECURITY_CONTEXT");

        String username = securityContext.getAuthentication().getName();
        List<String> roles = new ArrayList<>();
        for(GrantedAuthority ga:securityContext.getAuthentication().getAuthorities()){
            roles.add(ga.getAuthority());
        }
        Map<String,Object> params = new HashMap<>();
        params.put("username",username);
        params.put("roles",roles);


        return params;
    }

    @RequestMapping("/user")
    public Object getAuthentication() {
        SecurityContext securityContextt = SecurityContextHolder.getContext();
        Authentication authentication=securityContextt.getAuthentication();
        //Object u = authentication.getPrincipal();
        Object u = authentication.getDetails();
        return u;
    }

    @RequestMapping(value = "/id", method = RequestMethod.GET)
    public int currentUserId(Principal principal) {
        return userService.getUserId(principal);
    }
}
