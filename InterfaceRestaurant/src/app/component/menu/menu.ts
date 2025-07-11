import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PlateService } from '../../services/plate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plate } from '../../models/plate.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

 private router = inject(Router);
  private route = inject(ActivatedRoute);
  private plateService = inject(PlateService);
  userName: string = '';
  plates: Plate[] = [];
  loading: boolean = true;
  error: string = '';


  ngOnInit() {
    this.loadPlates();
  }


   loadPlates() {
    this.loading = true;
    this.plateService.getAllPlates().subscribe({
      next: (data) => {
        this.plates = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des plats', err);
        this.error = 'Impossible de charger les plats. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    });
  }
}
