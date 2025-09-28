import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metrolento',
  imports: [],
  templateUrl: './metrolento.html',
  styleUrl: './metrolento.scss'
})
export class Metrolento {
  constructor(private router: Router){
    
  }
        goToMetroMedio() {
    this.router.navigate(['/metromedio']);
  }
}
