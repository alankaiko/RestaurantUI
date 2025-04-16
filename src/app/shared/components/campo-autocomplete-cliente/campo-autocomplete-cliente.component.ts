import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from "../../shared-utils/modelos/cliente";
import {ClienteService} from "../../zservice/cliente.service";
import {ClienteDTO} from "../../shared-utils/dto/cliente-dto";

@Component({
  selector: 'campo-autocomplete-cliente',
  templateUrl: './campo-autocomplete-cliente.component.html',
  styleUrls: ['./campo-autocomplete-cliente.component.css']
})
export class CampoAutocompleteClienteComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() clientes: Cliente[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  clienteFiltro = new ClienteDTO;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ClienteService) {
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
      let clie = new Cliente;
      clie.nome = value + '';
      this._textoSelecionado = clie;
    } else {
      this._textoSelecionado = value;
    }

    this.textoChange.emit(this._textoSelecionado);
  }

  buscarClientes(event) {
    this.clienteFiltro.nome = event.query;

    this.service.listarPaginado(this.clienteFiltro).then(response => {
      this.clientes = response.content;
    });
  }
}
