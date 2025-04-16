import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcedimentomedicoService} from "../../zservice/procedimentomedico.service";
import {ProcedimentoMedico} from "../../shared-utils/modelos/procedimento-medico";
import {ProcedimentoMedicoFiltro} from "../../shared-utils/filtros/procedimento-medico-filtro";

@Component({
  selector: 'campo-autocomplete-procedimento',
  templateUrl: './campo-autocomplete-procedimento.component.html',
  styleUrls: ['./campo-autocomplete-procedimento.component.css']
})
export class CampoAutocompleteProcedimentoComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaProcedimento: ProcedimentoMedico[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtroprocedimento = new ProcedimentoMedicoFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ProcedimentomedicoService) {
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

  BuscarProcedimentos(event) {
    this.filtroprocedimento.nome = event.query;

    this.service.Consultar(this.filtroprocedimento).then(response => {
      this.listaProcedimento = response.procedimentos.content;
    }).catch(erro => erro);
  }
}
