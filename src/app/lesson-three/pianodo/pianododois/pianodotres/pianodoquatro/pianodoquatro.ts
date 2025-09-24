import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';

@Component({
  selector: 'app-pianodoquatro',
  standalone: true,
  templateUrl: './pianodoquatro.html',
  styleUrl: './pianodoquatro.scss',
  imports: []
})
export class Pianodoquatro {
  private audioMap: Record<string, Howl> = {};
  activeKeys: Set<string> = new Set(); // guarda teclas do piano "ativas"

  // 🔹 Novo: guarda notas da pauta que estão ativas
  activeNotes: Set<string> = new Set();

  mostrarauladois = false;

  iniciarPianoDois() {
    this.mostrarauladois = true;
  }

  voltarTelaInicial() {
    this.mostrarauladois = false;
  }

  constructor(private router: Router) {
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

  // 🔹 Ativar/desativar notas da pauta
   activateNote(note: string) {
    this.activeNotes.add(note);
  }

   deactivateNote(note: string) {
    this.activeNotes.delete(note);
  }

  isNoteActive(note: string): boolean {
    return this.activeNotes.has(note);
  }

  playNote(noteClass: string) {
    const sound = this.audioMap[noteClass];
    if (sound) {
      sound.stop();
      sound.play();
    }
  }

// Quando clica na tecla do piano
onMouseDown(noteClass: string) {
  this.activeKeys.add(noteClass);
  this.playNote(noteClass);

  if (noteClass === 'white d') {
    this.activateNote('nota-re');
  }
}


onMouseUp(noteClass: string) {
  this.activeKeys.delete(noteClass);

  if (noteClass === 'white d') {
    this.deactivateNote('nota-re');
  }
}


  // 🔹 Pressionar tecla física
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'g') {
      if (!this.activeKeys.has('white b')) {
        this.activeKeys.add('white b');
        this.playNote('white c3');
      }
    }
  }

  // 🔹 Soltar tecla física
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'g') {
      this.activeKeys.delete('white b');
      this.deactivateNote('nota-do'); // solta a nota da pauta também
    }
  }

  // helper pra HTML aplicar classe em teclas do piano
  isActive(noteClass: string): boolean {
    return this.activeKeys.has(noteClass);
  }

    goToDashboard() {
    this.router.navigate(['/muitobemreturmaum']);
  }
}
