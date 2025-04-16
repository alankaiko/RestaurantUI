import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageAlertUtils} from "../../zutil/message-alert-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'faixa-titulo-botao',
  templateUrl: './faixa-titulo-botao.component.html',
  styleUrls: ['./faixa-titulo-botao.component.css']
})
export class FaixaTituloBotaoComponent implements OnInit {
  @Input() titulo: string = 'Não informado';
  @Input() flexaoGenero: string = 'a';

  @Input() addAgenda: boolean;
  @Input() addHome: boolean;

  @Input() addNovo: boolean;
  @Input() tituloNovo: string = '';
  @Output() onNovo: EventEmitter<void> = new EventEmitter<void>();

  constructor(private messageAlertUtils: MessageAlertUtils,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  navegarParaAgenda() {
    const codunidade = localStorage.getItem('codigounidade') as string;

    if (codunidade === 'undefined') {
      this.messageAlertUtils.mostrarMensagem('error', 'Erro', 'Usuário não possui nenhuma empresa vínculada, verifique no menu Ferramentas');
      return;
    }

    this.route.navigate(['/pages/agenda']);
  }

  home() {
    this.route.navigate(['/']);
  }

}
