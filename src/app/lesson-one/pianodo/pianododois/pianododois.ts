import { Component, HostListener } from '@angular/core';
import { Pianodotres } from "./pianodotres/pianodotres";

@Component({
  selector: 'app-pianododois',
  imports: [Pianodotres],
  templateUrl: './pianododois.html',
  styleUrl: './pianododois.scss'
})
export class Pianododois {

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
    this.audioMap['white b'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/261-C.mp3'] });  // Dó
    this.audioMap['black cs'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/277-Cs.mp3'] });
    this.audioMap['white d'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/293-D.mp3'] });
    this.audioMap['black ds'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/311-Ds.mp3'] });
    this.audioMap['white e'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/329-E.mp3'] });
    this.audioMap['white f'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/349-F.mp3'] });
    this.audioMap['black fs'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/369-Fs.mp3'] });
    this.audioMap['white g'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/391-G.mp3'] });
    this.audioMap['black gs'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/415-Gs.mp3'] });
    this.audioMap['white a'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/440-A.mp3'] });
    this.audioMap['black as'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/466-As.mp3'] });
    this.audioMap['white c'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/493-B.mp3'] });
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
