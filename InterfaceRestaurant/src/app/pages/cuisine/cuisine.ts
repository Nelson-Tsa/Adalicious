import { CommandService } from './../../services/command.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Command } from '../../models/command.model';
import { CommonModule } from '@angular/common';
import { PlateService } from '../../services/plate.service';

@Component({
  selector: 'app-cuisine',
  imports: [CommonModule],
  templateUrl: './cuisine.html',
  styleUrl: './cuisine.css'
})
export class Cuisine implements OnInit {

  private router = inject(Router);
  private commandService = inject(CommandService);

commands: Command[] = [];
loading: boolean = true;
error: string = '';

  ngOnInit(): void {
    this.loadCommands();
  }

loadCommands() {
  this.loading = true;
  this.error = '';
  console.log('Début du chargement des commandes');
  
  this.commandService.getAllCommands().subscribe({
    next: (data) => {
      console.log('Données reçues du service:', data);
      this.commands = data;
      console.log('Commandes après assignation:', this.commands);
      this.loading = false;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des commandes', err);
      this.error = `Impossible de charger les commandes: ${err.message}`;
      this.loading = false;
    }
  });
}


backToHome() {
  this.router.navigate(['client']);
}

}
