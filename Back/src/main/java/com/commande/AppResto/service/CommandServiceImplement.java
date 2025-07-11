package com.commande.AppResto.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.commande.AppResto.model.Command;
import com.commande.AppResto.repository.CommandRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CommandServiceImplement implements CommandService {

    private final CommandRepository commandRepository;

    @Override
    public Command createCommand(Command command) {
        return commandRepository.save(command);
    }

    @Override
    public Command findCommandById(Long id) {
        return commandRepository.findById(id).orElse(null);
    }

    @Override
    public List<Command> findAllCommands() {
        return commandRepository.findAll();
    }

    @Override
    public List<Command> findCommandsByUserId(Long userId) {
        return commandRepository.findByUserId(userId);
    }

    @Override
    public String deleteCommand(Long id) {
        commandRepository.deleteById(id);
        return "Command deleted successfully";
    }
}
