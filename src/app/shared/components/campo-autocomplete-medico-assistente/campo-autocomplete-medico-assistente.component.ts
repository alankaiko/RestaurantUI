import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfissionalAssistente} from "../../shared-utils/modelos/profissional-assistente";
import {ProfissionalAssistenteFiltro} from "../../shared-utils/filtros/profissional-assistentel-filtro";
import {ProfissionalAssistenteService} from "../../zservice/profissional-assistente.service";

@Component({
  selector: 'campo-autocomplete-medico-assistente',
  templateUrl: './campo-autocomplete-medico-assistente.component.html',
  styleUrls: ['./campo-autocomplete-medico-assistente.component.css']
})
export class CampoAutocompleteMedicoAssistenteComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaMedico: ProfissionalAssistente[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtromedico = new ProfissionalAssistenteFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ProfissionalAssistenteService) {
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
