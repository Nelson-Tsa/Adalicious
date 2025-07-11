import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../client/client';
import { PlateService } from '../../services/plate.service';
import { Plate } from '../../models/plate.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-command',
  imports: [Client, CommonModule],
  templateUrl: './command.html',
  styleUrl: './command.css'
})
export class Command implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private plateService = inject(PlateService);
 
  userName: string = '';
  plates: Plate[] = [];
  loading: boolean = true;
  error: string = '';
  
  ngOnInit() {
   
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.userName = name;
      }
    });
    
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
  
  backToHome() {
    this.router.navigate(['/client']);
  }
}
