import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-texto-area',
  templateUrl: './campo-texto-area.component.html',
  styleUrls: ['./campo-texto-area.component.css']
})
export class CampoTextoAreaComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() maxlength = 250;
  @Input() rows = 8;
  @Input() type = "text";
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() placeholder: string = '';
  @Input() possuiLabel: boolean = true;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

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
}
