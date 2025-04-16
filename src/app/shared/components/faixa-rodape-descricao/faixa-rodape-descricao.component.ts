import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'faixa-rodape-descricao',
  templateUrl: './faixa-rodape-descricao.component.html',
  styleUrls: ['./faixa-rodape-descricao.component.css']
})
export class FaixaRodapeDescricaoComponent implements OnInit {
  @Input() titulo: string = 'Não informado';
  @Input() qtdVisualizar: number = 0;
  @Input() iconeCaminho: string = '';
  @ContentChild('botoes') botoesRef!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
