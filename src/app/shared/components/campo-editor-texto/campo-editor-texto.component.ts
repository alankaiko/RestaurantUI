import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-editor-texto',
  templateUrl: './campo-editor-texto.component.html',
  styleUrls: ['./campo-editor-texto.component.css']
})
export class CampoEditorTextoComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() type = "text";
  @Input() style: { [key: string]: string; } = {};
  @Input() readonly: boolean = false;
  @Input() id: string;
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
