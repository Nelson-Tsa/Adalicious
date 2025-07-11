package com.commande.AppResto.service;

import org.springframework.stereotype.Service;

import com.commande.AppResto.model.Plate;
import com.commande.AppResto.repository.PlateRepository;
import java.util.List;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PlateServiceImplement implements PlateService {

    private final PlateRepository plateRepository;

    @Override
    public Plate createPlate(Plate plate) {
        return plateRepository.save(plate);
    }

    @Override
    public List<Plate> getAllPlates() {
        return plateRepository.findAll();
    }

    @Override
    public String deletePlate(Long id) {
        plateRepository.deleteById(id);
        return "Plate deleted successfully";
    }

    @Override
    public Plate findPlateByName(String name) {
        return plateRepository.findPlateByName(name);
    }

    @Override
    public Plate findPlateById(Long id) {
        return plateRepository.findById(id).orElse(null);
    }

}
