import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'painel-tabs',
  templateUrl: './painel-tabs.component.html',
  styleUrls: ['./painel-tabs.component.css']
})
export class PainelTabsComponent implements OnInit {
  @Input() itens: any[] = [];
  @Output() codigoObjetoSelecionado: EventEmitter<number> = new EventEmitter<number>();
  @Input() numerodaAba: number;

  constructor() { }

  ngOnInit(): void {
  }

  escolherAba(numero: number) {
    this.numerodaAba = numero;
    this.codigoObjetoSelecionado.emit(this.itens[numero].value.codigo);
  }
}
