package com.taderok.taderok.Controller;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/rest/hello")
@RestController
public class HelloResource {

    @GetMapping("/all")
    public String hello() {
        return "Hello Youtube";
    }

    @GetMapping("/secured/all")
    public String securedHello() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentUserName = authentication.getName();
            return currentUserName;

    }

    @GetMapping("/secured/alternate")
    public String alternate() {
        return "alternate";
    }
}
