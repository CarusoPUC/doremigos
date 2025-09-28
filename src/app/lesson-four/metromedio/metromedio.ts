import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metromedio',
  imports: [],
  templateUrl: './metromedio.html',
  styleUrl: './metromedio.scss'
})
export class Metromedio {
  constructor(private router: Router){
    
  }
        goToMetroRapido() {
    this.router.navigate(['/metrorapido']);
  }
}

