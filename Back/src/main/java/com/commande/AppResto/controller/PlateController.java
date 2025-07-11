package com.commande.AppResto.controller;

import com.commande.AppResto.model.Plate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.commande.AppResto.service.PlateService;
import java.util.List;


@RestController
@RequestMapping("/plate")
public class PlateController {

    private final PlateService plateService;

    @Autowired
    public PlateController(PlateService plateService) {
        this.plateService = plateService;
    }

    @PostMapping("/create")
    public Plate createPlate(@RequestBody Plate plate) {
        return plateService.createPlate(plate);
    }

    @GetMapping("/all")
    public List<Plate> getAllPlates() {
        return plateService.getAllPlates();
    }

    @GetMapping("/find/{name}")
    public Plate findPlateByName(String name) {
        return plateService.findPlateByName(name);
    }

    @GetMapping("/find/{id}")
    public Plate findPlateById(Long id) {
        return plateService.findPlateById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePlate(Long id) {
        return plateService.deletePlate(id);
    }
}
