import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muitobemturmaum',
  imports: [],
  templateUrl: './muitobemreturmaum.html',
  styleUrl: './muitobemreturmaum.scss'
})
export class Muitobemreturmaum {
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
