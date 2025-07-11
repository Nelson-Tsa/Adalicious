import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cuisine',
  imports: [RouterLink],
  templateUrl: './cuisine.html',
  styleUrl: './cuisine.css'
})
export class Cuisine {

  private route = inject(ActivatedRoute);
  private router = inject(Router);


backToHome() {
  this.router.navigate(['client']);
}

}
