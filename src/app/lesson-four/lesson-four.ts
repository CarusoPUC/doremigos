import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Metrolento } from "./metrolento/metrolento";

@Component({
  selector: 'app-lesson-four',
  imports: [Metrolento],
  templateUrl: './lesson-four.html',
  styleUrls: ['./lesson-four.scss'],
  animations: [
    trigger('modalAnimation', [
      state('aberto', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
      state('fechando', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition('void => aberto', [
        style({ opacity: 0, transform: 'translateY(0%) scale(0.5)' }),
        animate('300ms ease-out')
      ]),
      transition('aberto => fechando', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class LessonFour {
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
