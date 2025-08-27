import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Intro } from './profile/intro/intro';
import { Profile } from './profile/profile';
import { Home } from './home/home';
import { Schedule } from "./schedule/schedule";
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Profile, Home, Schedule, RouterOutlet],
  template: `
    <!-- <app-profile></app-profile> -->
     <!-- <app-home></app-home> -->
      <!-- <app-schedule></app-schedule> -->
    <router-outlet></router-outlet>
  `
})
export class App implements AfterViewInit {
  @ViewChild('introContainer', { read: ViewContainerRef }) 
  introContainer!: ViewContainerRef;

  async ngAfterViewInit() {
    // Cria dinamicamente o componente Intro
    // const introRef = this.introContainer.createComponent(Intro);

  }
}
