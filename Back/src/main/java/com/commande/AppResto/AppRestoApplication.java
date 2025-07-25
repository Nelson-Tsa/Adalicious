package com.commande.AppResto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class AppRestoApplication {

	public static void main(String[] args) {

		// Charger les variables d'environnement depuis .env
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        // lance l'aplicaiton
		SpringApplication.run(AppRestoApplication.class, args);
      	 System.out.println("La cuisine démarre...");
		
	}

}
