import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PacienteService} from "../../zservice/paciente.service";
import {Paciente} from "../../shared-utils/modelos/paciente";
import {PacienteFiltro} from "../../shared-utils/filtros/paciente-filtro";

@Component({
  selector: 'campo-autocomplete',
  templateUrl: './campo-autocomplete.component.html',
  styleUrls: ['./campo-autocomplete.component.css']
})
export class CampoAutocompleteComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaPaciente: Paciente[];
  @Input() readonly : boolean = false;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtropaciente = new PacienteFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: PacienteService) {
  }

  ngOnInit(): void {
  }

  get texto(): any {
    return this._textoSelecionado;
  }

  @Input() set texto(value: any) {
    if (this._textoSelecionado === value)
      return;

    if (!value.codigo && typeof (value) === 'string') {
      let pac = new Paciente;
      pac.nome = value + '';
      pac.codigo = null;
      this._textoSelecionado = pac;
    } else {
      this._textoSelecionado = value;
    }

    this.textoChange.emit(this._textoSelecionado);
  }

  buscarPacientes(event) {
    this.filtropaciente.nome = event.query;

    this.service.Consultar(this.filtropaciente).then(response => {
      this.listaPaciente = response.pacientes.content;
    }).catch(erro => erro);
  }
}
