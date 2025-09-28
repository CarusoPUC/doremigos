import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parabensandamento',
  imports: [],
  templateUrl: './parabensandamento.html',
  styleUrl: './parabensandamento.scss'
})
export class Parabensandamento {
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
    this.router.navigate(['/continuaturmaum']);
  }
}
