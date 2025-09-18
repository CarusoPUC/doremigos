import { Component, HostListener } from '@angular/core';
import { Pianoretres } from "./pianoretres/pianoretres";

@Component({
  selector: 'app-pianoredois',
  imports: [Pianoretres],
  templateUrl: './pianoredois.html',
  styleUrl: './pianoredois.scss'
})
export class Pianoredois {

  private audioMap: Record<string, Howl> = {};
  activeKeys: Set<string> = new Set(); // guarda teclas "ativas"

  mostraraulatres = false;

  iniciarPiano() {
    this.mostraraulatres = true;
  }

  voltarTelaInicial() {
    this.mostraraulatres = false;
  }


  constructor() {
    this.audioMap['white c3'] = new Howl({ src: ['assets/C3.m4a'] });   // Dó grave
    this.audioMap['white c4'] = new Howl({ src: ['assets/C4.m4a'] });   // Dó médio
    this.audioMap['white d']  = new Howl({ src: ['assets/D.m4a'] });    // Ré
    this.audioMap['white e']  = new Howl({ src: ['assets/E.m4a'] });    // Mi
    this.audioMap['white f']  = new Howl({ src: ['assets/F.m4a'] });    // Fá
    this.audioMap['white g']  = new Howl({ src: ['assets/G.m4a'] });    // Sol
    this.audioMap['white a']  = new Howl({ src: ['assets/A.m4a'] });    // Lá
    this.audioMap['white b']  = new Howl({ src: ['assets/B.m4a'] });    // Si

    // 🔹 Dó final (agudo)
    this.audioMap['white c5'] = new Howl({ src: ['assets/C5.m4a'] });

    // 🎹 Notas pretas
    this.audioMap['black cs'] = new Howl({ src: ['assets/Db.m4a'] });   // Dó#
    this.audioMap['black ds'] = new Howl({ src: ['assets/Eb.m4a'] });   // Ré#
    this.audioMap['black fs'] = new Howl({ src: ['assets/Gb.m4a'] });   // Fá#
    this.audioMap['black gs'] = new Howl({ src: ['assets/Ab.m4a'] });   // Sol#
    this.audioMap['black as'] = new Howl({ src: ['assets/Bb.m4a'] });   // Lá#
  }

  playNote(noteClass: string) {
    const sound = this.audioMap[noteClass];
    if (sound) {
      sound.stop();
      sound.play();
    }
  }

  // 🔹 Pressionar tecla física
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'u') {
      if (!this.activeKeys.has('white d')) {
        this.activeKeys.add('white d');
      }
    }
  }

  // 🔹 Soltar tecla física
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'u') {
      this.activeKeys.delete('white d');
    }
  }

  // helper pra HTML aplicar classe
  isActive(noteClass: string): boolean {
    return this.activeKeys.has(noteClass);
  }
}
