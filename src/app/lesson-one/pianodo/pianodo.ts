import { Component, HostListener } from '@angular/core';
import { Howl } from 'howler';
import { Pianododois } from "./pianododois/pianododois";

@Component({
  selector: 'app-pianodo',
  standalone: true,
  templateUrl: './pianodo.html',
  styleUrl: './pianodo.scss',
  imports: [Pianododois]
})
export class Pianodo {
  private audioMap: Record<string, Howl> = {};
  activeKeys: Set<string> = new Set(); // guarda teclas "ativas"

  mostrarauladois = false;

  iniciarPianoDois() {
    this.mostrarauladois = true;
  }

  voltarTelaInicial() {
    this.mostrarauladois = false;
  }


constructor() {
  this.audioMap['white b'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/261-C.mp3'] }); // Dó
  this.audioMap['white d'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/293-D.mp3'] }); // Ré
  this.audioMap['white e'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/329-E.mp3'] }); // Mi
  this.audioMap['white f'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/349-F.mp3'] }); // Fá
  this.audioMap['white g'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/391-G.mp3'] }); // Sol
  this.audioMap['white a'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/440-A.mp3'] }); // Lá
  this.audioMap['white c'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/495-B.mp3'] }); // Si
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
    if (event.key.toLowerCase() === 'g') {
      if (!this.activeKeys.has('white b')) {
        this.activeKeys.add('white b');
        this.playNote('white b');
      }
    }
  }

  // 🔹 Soltar tecla física
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'g') {
      this.activeKeys.delete('white b');
    }
  }

  // helper pra HTML aplicar classe
  isActive(noteClass: string): boolean {
    return this.activeKeys.has(noteClass);
  }
}
