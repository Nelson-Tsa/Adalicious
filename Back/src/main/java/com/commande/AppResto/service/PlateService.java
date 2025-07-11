package com.commande.AppResto.service;

import com.commande.AppResto.model.Plate;
import java.util.List;

public interface PlateService {

    Plate createPlate(Plate plate);
    List<Plate> getAllPlates();
    Plate findPlateById(Long id);
    Plate findPlateByName(String name);
    String deletePlate(Long id);
}
