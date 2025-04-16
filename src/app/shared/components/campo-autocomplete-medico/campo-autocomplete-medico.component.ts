import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfissionalService} from "../../zservice/profissional.service";
import {Profissional} from "../../shared-utils/modelos/profissional";
import {ProfissionalFiltro} from "../../shared-utils/filtros/profissional-filtro";

@Component({
  selector: 'campo-autocomplete-medico',
  templateUrl: './campo-autocomplete-medico.component.html',
  styleUrls: ['./campo-autocomplete-medico.component.css']
})
export class CampoAutocompleteMedicoComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaMedico: Profissional[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtromedico = new ProfissionalFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ProfissionalService) {
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

  BuscarProfissional(event) {
    this.filtromedico.nome = event.query;

    this.service.Consultar(this.filtromedico).then(response => {
      this.listaMedico = response.profissionais.content;
    }).catch(erro => erro);
  }
}
