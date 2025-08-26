import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Intro } from "./intro/intro";
import { CommonModule } from '@angular/common';
import { Howl } from 'howler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  imports: [CommonModule, Intro]
})
export class Profile implements OnInit {

  pianoMap: { [key: string]: string } = {
    'do': 'C',
    're': 'D',
    'mi': 'E',
    'fa': 'F'
  };

  audioMap: { [key: string]: Howl } = {};
  hoverSoundProf!: Howl;
  hoverSoundAluno!: Howl;

  @ViewChild('noteDo', { static: true }) noteDo!: ElementRef<HTMLImageElement>;
  @ViewChild('noteRe', { static: true }) noteRe!: ElementRef<HTMLImageElement>;
  @ViewChild('noteMi', { static: true }) noteMi!: ElementRef<HTMLImageElement>;
  @ViewChild('noteFa', { static: true }) noteFa!: ElementRef<HTMLImageElement>;
  @ViewChild('profDiv', { static: true }) profDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('alunoDiv', { static: true }) alunoDiv!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Inicializa sons das notas
    this.audioMap['do'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/261-C.mp3'] });
    this.audioMap['re'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/293-D.mp3'] });
    this.audioMap['mi'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/329-E.mp3'] });
    this.audioMap['fa'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/349-F.mp3'] });

    this.hoverSoundProf = new Howl({
      src: ['assets/bnf.mp3'],
      loop: true,
      volume: 0.5 // opcional
    });
    this.hoverSoundAluno = new Howl({
      src: ['assets/meg.mp3'],
      loop: true,
      volume: 0.5 // opcional
    });

    // Adiciona evento de clique nas notas, ignorando retorno de play()
    this.renderer.listen(this.noteDo.nativeElement, 'click', () => void this.audioMap['do'].play());
    this.renderer.listen(this.noteRe.nativeElement, 'click', () => void this.audioMap['re'].play());
    this.renderer.listen(this.noteMi.nativeElement, 'click', () => void this.audioMap['mi'].play());
    this.renderer.listen(this.noteFa.nativeElement, 'click', () => void this.audioMap['fa'].play());

    const profEl = document.querySelector('.perfil.prof') as HTMLElement;
    if (profEl) {
      this.renderer.listen(profEl, 'mouseenter', () => void this.hoverSoundProf.play());
      this.renderer.listen(profEl, 'mouseleave', () => void this.hoverSoundProf.stop());
    }
    const aluno = document.querySelector('.perfil.aluno') as HTMLElement;
    if (aluno) {
      this.renderer.listen(aluno, 'mouseenter', () => void this.hoverSoundAluno.play());
      this.renderer.listen(aluno, 'mouseleave', () => void this.hoverSoundAluno.stop());
    }
  }
}
