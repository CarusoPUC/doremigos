import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continua',
  imports: [],
  templateUrl: './continua.html',
  styleUrl: './continua.scss'
})
export class Continua {

constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
