import { Component } from '@angular/core';
import { Pianodotres } from "../pianodotres/pianodotres";

@Component({
  selector: 'app-lesson-three-two',
  imports: [Pianodotres],
  templateUrl: './lesson-three-two.html',
  styleUrl: './lesson-three-two.scss'
})
export class LessonThreeTwo {
  mostrarPiano = false;
  mostrarModal = true;
  animacaoState: 'aberto' | 'fechando' = 'aberto';

  iniciarPiano() {
    this.mostrarPiano = true;
  }

  voltarTelaInicial() {
    this.mostrarPiano = false;
  }

  abrirModal() {
    this.mostrarModal = true;
    this.animacaoState = 'aberto';
  }

  fecharModal() {
    this.animacaoState = 'fechando';
    setTimeout(() => {
      this.mostrarModal = false;
    }, 300); // tempo igual ao da animação
  }
}
