import { Component } from '@angular/core';
import { Pianodo } from "./pianodo/pianodo";

@Component({
  selector: 'app-lesson-one',
  imports: [Pianodo],
  templateUrl: './lesson-one.html',
  styleUrl: './lesson-one.scss'
})
export class LessonOne {
  mostrarPiano = false;

  iniciarPiano() {
    this.mostrarPiano = true;
  }

  voltarTelaInicial() {
    this.mostrarPiano = false;
  }

}
