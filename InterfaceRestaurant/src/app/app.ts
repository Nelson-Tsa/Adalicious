import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from './pages/client/client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Client],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'InterfaceRestaurant';
}
