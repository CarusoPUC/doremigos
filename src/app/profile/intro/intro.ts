import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
  animations: [
    trigger('slideFade', [
      state('hidden', style({ transform: 'translate(-150%, -50%)', opacity: 0 })),
      state('center', style({ transform: 'translate(-50%, -50%)', width: '600px', height: 'auto', opacity: 1 })),
      state('shrink', style({ transform: 'translate(-50%, -95%) scale(0.3)', width: '300px', height: 'auto', opacity: 1 })),
      transition('hidden => center', [animate('1s ease-out')]),
      transition('center => shrink', [animate('0.8s ease-in-out')])
    ])
  ]
})
export class Intro implements OnInit {
  state: 'hidden' | 'center' | 'shrink' = 'hidden';
  @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;
  overlayActive = false; // controla o fadeout
  showPlayButton = true; // botão para iniciar o vídeo

  ngOnInit(): void {
    setTimeout(() => this.state = 'center', 100);
  }

  playVideo(): void {
    const video = this.introVideo.nativeElement;
    video.muted = false; // se quiser som já ativo
    video.volume = 0.3
    video.play().then(() => {
      console.log('Vídeo iniciado ✅');
      this.showPlayButton = false;
      this.overlayActive = true; 
    }).catch(err => {
      console.error('Erro ao iniciar vídeo:', err);
    });
  }

  onVideoEnded(): void {
    this.state = 'shrink';
  }
}
