package com.taderok.taderok.Controller;



import com.taderok.taderok.Entity.User;
import com.taderok.taderok.LoginDocs.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

    public static int idConnected;

    public static int getIdConnected() {
        return idConnected;
    }

    public static void setIdConnected(int idConnected) {
        HelloResource.idConnected = idConnected;
    }


}
