import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pianodotres',
  imports: [],
  templateUrl: './pianodotres.html',
  styleUrl: './pianodotres.scss'
})
export class Pianodotres {
    private audioMap: Record<string, Howl> = {};

    constructor(private router: Router) {
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
    this.audioMap['white c'] = new Howl({ src: ['https://mczak.com/code/piano/assets/midia/495-B.mp3'] });
  }

  playNote(noteClass: string) {
    const sound = this.audioMap[noteClass];
    if (sound) {
      sound.stop();
      sound.play();
    }
  }

    goToDashboard() {
    this.router.navigate(['/muitobemDo']);
  }
}
