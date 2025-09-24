import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continuaturmaum',
  imports: [],
  templateUrl: './continuaturmaum.html',
  styleUrl: './continuaturmaum.scss'
})
export class Continuaturmaum {
constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboardFirst']);
  }
}
