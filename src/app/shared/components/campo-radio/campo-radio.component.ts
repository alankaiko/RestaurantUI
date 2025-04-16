import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-radio',
  templateUrl: './campo-radio.component.html',
  styleUrls: ['./campo-radio.component.css']
})
export class CampoRadioComponent implements OnInit {
  @Input() labelText: string;
  @Input() value!: any;
  @Input() disabled!: boolean;
  @Input() grupo!: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() id: string;

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
