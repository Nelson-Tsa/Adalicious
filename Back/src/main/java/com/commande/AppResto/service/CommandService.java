package com.commande.AppResto.service;

import java.util.List;

import com.commande.AppResto.model.Command;

public interface CommandService {
    Command createCommand(Command command);
    Command findCommandById(Long id);
    List<Command> findAllCommands();
    List<Command> findCommandsByUserId(Long userId);
    String deleteCommand(Long id);
}
