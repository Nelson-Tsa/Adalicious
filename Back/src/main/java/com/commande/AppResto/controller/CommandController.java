package com.commande.AppResto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.commande.AppResto.model.Command;
import com.commande.AppResto.model.Plate;
import com.commande.AppResto.model.User;
import com.commande.AppResto.service.CommandService;
import com.commande.AppResto.service.PlateService;
import com.commande.AppResto.service.UserService;

@RestController
@RequestMapping("/command")
public class CommandController {

    private final CommandService commandService;
    private final UserService userService;
    private final PlateService plateService;

    @Autowired
    public CommandController(CommandService commandService, UserService userService, PlateService plateService) {
        this.commandService = commandService;
        this.userService = userService;
        this.plateService = plateService;
    }

    @PostMapping("/create")
    public Command createCommand(@RequestBody CommandRequest request) {
        Command command = new Command();
        
        User user = userService.findById(request.getUserId());
        Plate plate = plateService.findPlateById(request.getPlateId());
        
        if (user != null && plate != null) {
            command.setUser(user);
            command.setPlate(plate);
            return commandService.createCommand(command);
        }
        
        return null;
    }

    @GetMapping("/all")
    public List<Command> getAllCommands() {
        return commandService.findAllCommands();
    }

    @GetMapping("/find/{id}")
    public Command findCommandById(@PathVariable Long id) {
        return commandService.findCommandById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Command> findCommandsByUserId(@PathVariable Long userId) {
        return commandService.findCommandsByUserId(userId);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCommand(@PathVariable Long id) {
        return commandService.deleteCommand(id);
    }
    
    // Classe interne pour gérer la requête de création de commande
    public static class CommandRequest {
        private Long userId;
        private Long plateId;
        
        public Long getUserId() {
            return userId;
        }
        
        public void setUserId(Long userId) {
            this.userId = userId;
        }
        
        public Long getPlateId() {
            return plateId;
        }
        
        public void setPlateId(Long plateId) {
            this.plateId = plateId;
        }
    }
}
