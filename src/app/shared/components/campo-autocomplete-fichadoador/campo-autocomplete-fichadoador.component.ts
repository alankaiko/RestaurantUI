import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FichaDoadorService} from "../../zservice/fichadoador.service";
import {FichaDoador} from "../../shared-utils/modelos/ficha-doador";
import {FichaDoadorFiltro} from "../../shared-utils/filtros/ficha-doador-filtro";

@Component({
  selector: 'campo-autocomplete-fichadoador',
  templateUrl: './campo-autocomplete-fichadoador.component.html',
  styleUrls: ['./campo-autocomplete-fichadoador.component.css']
})
export class CampoAutocompleteFichadoadorComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() field;
  @Input() style: { [key: string]: string; } = {};
  @Input() listaFichaDoador: FichaDoador[];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  filtro = new FichaDoadorFiltro;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: FichaDoadorService) {
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
      let ficha = new FichaDoador;
      ficha.doador.nome = value + '';
      ficha.doador.codigo = undefined;
      this._textoSelecionado = ficha;
    } else {
      this._textoSelecionado = value;
    }

    this.textoChange.emit(this._textoSelecionado);
  }

  buscarFichas(event) {
    this.filtro.nome = event.query;

    this.service.Consultar(this.filtro).then(response => {
      this.listaFichaDoador = response.fichas;
    }).catch(erro => erro);
  }
}
