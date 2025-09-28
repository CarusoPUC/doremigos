import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { Profile } from "./profile/profile";


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  pianoMap: { [key: string]: string } = {
    'do': 'C',
    're': 'D',
    'mi': 'E',
    'fa': 'F',
    'sol': 'B'
  };

  audioMap: { [key: string]: Howl } = {};

  @ViewChild('noteDo', { static: true }) noteDo!: ElementRef<HTMLImageElement>;
  @ViewChild('noteRe', { static: true }) noteRe!: ElementRef<HTMLImageElement>;
  @ViewChild('noteMi', { static: true }) noteMi!: ElementRef<HTMLImageElement>;
  @ViewChild('noteFa', { static: true }) noteFa!: ElementRef<HTMLImageElement>;
  @ViewChild('noteSol', { static: true }) noteSol!: ElementRef<HTMLImageElement>;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
      // Inicializa sons das notas
      this.audioMap['do'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/261-C.mp3'] });
      this.audioMap['re'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/293-D.mp3'] });
      this.audioMap['mi'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/329-E.mp3'] });
      this.audioMap['fa'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/349-F.mp3'] });
      this.audioMap['sol'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/391-G.mp3'] });

      // Adiciona evento de clique nas notas, ignorando retorno de play()
    this.renderer.listen(this.noteDo.nativeElement, 'click', () => void this.audioMap['do'].play());
    this.renderer.listen(this.noteRe.nativeElement, 'click', () => void this.audioMap['re'].play());
    this.renderer.listen(this.noteMi.nativeElement, 'click', () => void this.audioMap['mi'].play());
    this.renderer.listen(this.noteFa.nativeElement, 'click', () => void this.audioMap['fa'].play());
    this.renderer.listen(this.noteSol.nativeElement, 'click', () => void this.audioMap['sol'].play());

  }

  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
  goToScheduleFirst() {
    this.router.navigate(['/scheduleFirst']);
  }
}
