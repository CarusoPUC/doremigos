import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muitobemre',
  imports: [],
  templateUrl: './muitobemre.html',
  styleUrl: './muitobemre.scss'
})
export class Muitobemre {
mostrarPiano = false;
  mostrarModal = false;
  animacaoState: 'aberto' | 'fechando' = 'aberto';

  constructor(private router: Router) {}


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

      goToDashboard() {
    this.router.navigate(['/continua']);
  }
}
