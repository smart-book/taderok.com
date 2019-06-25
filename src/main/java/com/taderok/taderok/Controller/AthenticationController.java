package com.taderok.taderok.Controller;

import com.taderok.taderok.Domain.UserDTO;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.LoginDocs.UnauthorizedException;
import com.taderok.taderok.Security.JwtTokenUtil;
import com.taderok.taderok.Security.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AthenticationController {


    private static UserDTO connectedUser;

    public static UserDTO getConnectedUser() {
        return connectedUser;
    }

    public static void setConnectedUser(UserDTO connectedUser) {
        AthenticationController.connectedUser = connectedUser;
    }

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping(value = "/login")
    public ResponseEntity<UserDTO> login(@RequestBody User user, HttpServletRequest request, HttpServletResponse response){
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
            final JwtUser userDetails = (JwtUser)authentication.getPrincipal();
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final String token = jwtTokenUtil.generateToken(userDetails);
            response.setHeader("Token",token);
            connectedUser=new UserDTO(userDetails.getUser(),token);
            return new ResponseEntity<UserDTO>(new UserDTO(userDetails.getUser(),token), HttpStatus.OK);
        }catch (Exception e){
            throw  new UnauthorizedException(e.getMessage());
        }
    }

    @RequestMapping(method = RequestMethod.OPTIONS,value = "/logout")
    public void logout(@RequestBody User user, HttpServletRequest request, HttpServletResponse response){
        SecurityContextHolder.clearContext();
        setConnectedUser(null);
    }

}
