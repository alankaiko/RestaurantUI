import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-data-linha',
  standalone: false,
  templateUrl: './campo-data-linha.component.html',
  styleUrls: ['./campo-data-linha.component.css']
})
export class CampoDataLinhaComponent implements OnInit {
  @Input() labelText: string;
  @Input() labelDescricao: string;
  @Input() classe = "";
  @Input() maxlength = 250;
  @Input() styleClass = '';
  @Input() type = "text";
  @Input() step: string;
  @Input() min: string;
  @Input() max: string;
  @Input() pattern: string;
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() campoTextoStyle: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() id: string;

  @Input() name: string;
  @Input() dateFormat!: string;
  @Input() yearRange: string = '1900:2030'
  @Input() monthNavigator: boolean = false;
  @Input() yearNavigator: boolean = false;
  @Input() showOnFocus: boolean = true;
  @Input() timeOnly: boolean = false;
  @Input() inline: boolean = false;
  @Input() stepMinute!: number;
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  private _textoSelecionado!: any;
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
