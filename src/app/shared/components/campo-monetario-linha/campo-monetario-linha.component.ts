import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-monetario-linha',
  standalone: false,
  templateUrl: './campo-monetario-linha.component.html',
  styleUrls: ['./campo-monetario-linha.component.css']
})
export class CampoMonetarioLinhaComponent implements OnInit {
  @Input() labelText: string;
  @Input() labelDescricao: string;
  @Input() classe = "";
  @Input() maxlength = 250;
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() campoTextoStyle: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() placeholder: string = '';
  @Input() prefix: string = 'R$ ';
  @Input() thousands: string = '.';
  @Input() decimal: string = ',';

  private _textoSelecionado!: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

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
}
