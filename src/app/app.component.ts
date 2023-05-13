import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timeLineBany';

  paginaAtual = 1

    pagina(novaPagina: number) {
        this.paginaAtual = novaPagina
    }

    paginaAnterior() {
        this.paginaAtual--
    }

    proximaPagina() {
        this.paginaAtual++
    }
}
