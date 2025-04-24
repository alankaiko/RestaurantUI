import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-texto-area-linha',
  standalone: false,
  templateUrl: './campo-texto-area-linha.component.html',
  styleUrls: ['./campo-texto-area-linha.component.css']
})
export class CampoTextoAreaLinhaComponent implements OnInit {
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
  @Input() rows = 8;

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
