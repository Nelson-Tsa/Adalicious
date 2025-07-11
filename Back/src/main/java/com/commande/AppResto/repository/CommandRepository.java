package com.commande.AppResto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.commande.AppResto.model.Command;
import com.commande.AppResto.model.User;

@Repository
public interface CommandRepository extends JpaRepository<Command, Long> {
    List<Command> findByUser(User user);
    List<Command> findByUserId(Long userId);
}
