package com.commande.AppResto.service;

import com.commande.AppResto.repository.UserRepository;

import lombok.AllArgsConstructor;

import com.commande.AppResto.model.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class UserServiceImplement implements UserService {
  @Autowired
  private final UserRepository userRepository;

  @Override
  public User findById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  @Override
  public User findByName(String name) {
    return userRepository.findByName(name);
  }

  @Override
  public List<User> findAllUsers() {
    return userRepository.findAll();
  }


  @Override
  public User createUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public User updateUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public String deleteUser(Long id) {
    userRepository.deleteById(id);
    return "User deleted successfully";
  }


}
