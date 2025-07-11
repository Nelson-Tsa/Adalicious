package com.commande.AppResto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.commande.AppResto.model.User;
import com.commande.AppResto.service.UserService;



@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }



    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/find/{id}")
    public User findUserByIdUser(Long idUser) {
        return userService.findById(idUser);
    }

    @GetMapping("/find/{name}")
    public User findUserByName(String name) {
        return userService.findByName(name);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(Long id) {
        return userService.deleteUser(id);
    }

}
