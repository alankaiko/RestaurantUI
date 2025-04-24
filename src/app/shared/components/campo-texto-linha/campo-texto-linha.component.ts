import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-texto-linha',
  standalone: false,
  templateUrl: './campo-texto-linha.component.html',
  styleUrls: ['./campo-texto-linha.component.css']
})
export class CampoTextoLinhaComponent implements OnInit {
  @Input() labelText: string;
  @Input() labelDescricao: string;
  @Input() classe = "";
  @Input() maxlength = 250;
  @Input() type = "text";
  @Input() step: string;
  @Input() min: string;
  @Input() max: string;
  @Input() pattern: string;
  @Input() styleDescricao: { [key: string]: string; } = {};
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() campoTextoStyle: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() id: string;

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
