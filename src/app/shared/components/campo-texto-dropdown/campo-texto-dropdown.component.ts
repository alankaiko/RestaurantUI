import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-texto-dropdown',
  standalone: false,
  templateUrl: './campo-texto-dropdown.component.html',
  styleUrls: ['./campo-texto-dropdown.component.css']
})
export class CampoTextoDropdownComponent implements OnInit {
  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() classe = '';
  @Input() corLabel = '';
  @Input() possuiCor: boolean = false;
  @Input() options: any[] = [];
  @Input() style: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() autoDisplayFirst: boolean = false;
  @Input() desativarCampoTexto: boolean = false;

  @Input() maxlength = 250;
  @Input() type = "text";

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

  private _textoCampoSelecionado: any;
  @Output() textoCampoChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  get texto(): any {
    return this._textoSelecionado;
  }

  @Input() set texto(value: any) {
    if(this._textoSelecionado === value)
      return;

    this._textoSelecionado = value;
    this.textoChange.emit(this._textoSelecionado);
  }


  get textoCampo(): any {
    return this._textoCampoSelecionado;
  }

  @Input() set textoCampo(value: any) {
    if(this._textoCampoSelecionado === value)
      return;

    this._textoCampoSelecionado = value;
    this.textoCampoChange.emit(this._textoCampoSelecionado);
  }
}
