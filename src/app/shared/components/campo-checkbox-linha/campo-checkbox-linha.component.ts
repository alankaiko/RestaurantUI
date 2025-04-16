import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-checkbox-linha',
  templateUrl: './campo-checkbox-linha.component.html',
  styleUrls: ['./campo-checkbox-linha.component.css']
})
export class CampoCheckboxLinhaComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() styleDiv: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() binary: boolean = true;
  @Input() esquerda: boolean = false;
  @Input() display_flex: boolean = false;
  @Input() possuiLabel: boolean = false;
  @Input() placeholder: string = '';

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  get texto(): boolean {
    return this._textoSelecionado;
  }

  @Input() set texto(value: boolean) {
    if(this._textoSelecionado === value)
      return;

    this._textoSelecionado = value;
    this.textoChange.emit(this._textoSelecionado);
  }

}
