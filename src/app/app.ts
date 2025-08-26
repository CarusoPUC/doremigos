import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Intro } from './profile/intro/intro';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Profile],
  template: `
    <app-profile></app-profile>
  `
})
export class App implements AfterViewInit {
  @ViewChild('introContainer', { read: ViewContainerRef }) 
  introContainer!: ViewContainerRef;

  async ngAfterViewInit() {
    // Cria dinamicamente o componente Intro
    const introRef = this.introContainer.createComponent(Intro);

  }
}
