import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Howl } from 'howler';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  imports: [CommonModule]
})
export class Profile implements OnInit {
    showIntroImage = true;   // PNG + botão no começo
  showVideo = false;       // vídeo escondido até dar play
  overlayActive = false;   // controla fade

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

  constructor(private renderer: Renderer2, private router: Router) {}

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
    goToHome() {
    this.hoverSoundProf.stop();
    this.router.navigate(['/home']);
  }

  state: 'hidden' | 'center' | 'shrink' = 'hidden';
@ViewChild('introVideo', { static: false }) introVideo!: ElementRef<HTMLVideoElement>;
@ViewChild('introContainer', { static: false }) introContainer!: ElementRef<HTMLVideoElement>;
@ViewChild('overlayId', { static: false }) overlayId!: ElementRef<HTMLVideoElement>;
@ViewChild('introImage', { static: false }) introImage!: ElementRef<HTMLVideoElement>;
@ViewChild('playButton', { static: false }) playButton!: ElementRef<HTMLVideoElement>;

  showPlayButton = true; // botão para iniciar o vídeo

playVideo(): void {
  this.showPlayButton = false; // força Angular renderizar o <video>

  setTimeout(() => {
    this.showIntroImage = false; // some com PNG e botão
    this.showVideo = true;       // mostra vídeo
    this.playButton.nativeElement.style.display = 'none';
    
    const video = this.introVideo?.nativeElement;
    if (video) {
      this.introVideo.nativeElement.style.display = 'block';
      video.muted = false;
      video.volume = 0.3;
      video.play().then(() => {
        console.log('Vídeo iniciado ✅');
      }).catch(err => {
        console.error('Erro ao iniciar vídeo:', err);
        this.showPlayButton = true; // volta caso dê erro
      });
    }
  });
}


onVideoEnded(): void {
  // Ativa a overlay para fazer fade
  this.overlayActive = true;  

  // Adiciona a classe para animar opacidade do container
  this.renderer.addClass(this.introContainer.nativeElement, 'fade-out');

  // Espera a animação de fade (1s) antes de esconder o container
  setTimeout(() => {
    this.introVideo.nativeElement.style.display = 'none';
    this.introContainer.nativeElement.style.display = 'none';
    this.overlayId.nativeElement.style.display = 'none';
  }, 1000); // deve bater com a duração do transition

  this.router.navigate(['/home']);
  
}




}
