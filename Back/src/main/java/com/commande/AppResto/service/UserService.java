package com.commande.AppResto.service;

import com.commande.AppResto.model.User;

import java.util.List;




public interface UserService {
    User findById(Long id);
    User findByName(String name);


    List<User> findAllUsers();
    User createUser(User user);
    User updateUser(User user);
    String deleteUser(Long idUser);

}
