import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client',
  imports: [RouterLink, FormsModule],
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
