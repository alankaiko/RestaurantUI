import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {constants} from "../../core/constants";

@Component({
  selector: 'campo-spinner',
  templateUrl: './campo-spinner.component.html',
  styleUrls: ['./campo-spinner.component.css']
})
export class CampoSpinnerComponent implements OnInit {
  @Input() labelText: string;
  @Input() style: { [key: string]: string; } = {};
  @Input() min: number = 1;
  @Input() max: number;
  @Input() possuiLabel: boolean = false;
  @Input() styleLabel: { [key: string]: string; } = {};

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor(private config: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.config.setTranslation(constants.calendar.pt);
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
