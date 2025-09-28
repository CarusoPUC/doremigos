import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metrorapido',
  imports: [],
  templateUrl: './metrorapido.html',
  styleUrl: './metrorapido.scss'
})
export class Metrorapido {
  constructor(private router: Router){
    
  }
        goToMetroRapido() {
    this.router.navigate(['/parabensandamento']);
  }
}
