import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AtendimentoService} from "../../zservice/atendimento.service";
import {Atendimento} from "../../shared-utils/modelos/atendimento";
import {AtendimentoFiltro} from "../../shared-utils/filtros/atendimento-filtro";

@Component({
  selector: 'campo-autocomplete-atendimento',
  templateUrl: './campo-autocomplete-atendimento.component.html',
  styleUrls: ['./campo-autocomplete-atendimento.component.css']
})
export class CampoAutocompleteAtendimentoComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaAtendimento: Atendimento[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtroatendimento = new AtendimentoFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: AtendimentoService) {
  }

  ngOnInit(): void {
  }

  get texto(): any {
    return this._textoSelecionado;
  }

  @Input() set texto(value: any) {
    if (this._textoSelecionado === value)
      return;

    this._textoSelecionado = value;
    this.textoChange.emit(this._textoSelecionado);
  }

  BuscarAtendimentos(event) {
    this.filtroatendimento.nomePaciente = event.query;

    this.service.Consultar(this.filtroatendimento).then(response => {
      this.listaAtendimento = response.atendimentos.content;
    }).catch(erro => erro);
  }
}
