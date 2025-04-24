import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-numero-togle',
  standalone: false,
  templateUrl: './campo-numero-togle.component.html',
  styleUrls: ['./campo-numero-togle.component.css']
})
export class CampoNumeroTogleComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() showButtons: boolean = true;
  @Input() style: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string;
  @Input() buttonLayout: string = 'horizontal';
  @Input() spinnerMode: string = 'horizontal';
  @Input() step: number = 0.1;
  @Input() min: number = 0;
  @Input() max: number = 3.5;

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
