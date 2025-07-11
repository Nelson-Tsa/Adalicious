package com.commande.AppResto.repository;


import com.commande.AppResto.model.Plate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PlateRepository extends JpaRepository<Plate, Long>, JpaSpecificationExecutor<Plate> {
    Plate findPlateById(Long id);
    Plate findPlateByName(String name);
}
