import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-client',
  imports: [RouterLink, FormsModule, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {

  name: string = '';

  private router = inject(Router)


  openCuisine() {
    this.router.navigate(['/cuisine'])
  }
  openCommand(){
    if(this.name){
      this.router.navigate(['/command', this.name])
    }
  }
}
