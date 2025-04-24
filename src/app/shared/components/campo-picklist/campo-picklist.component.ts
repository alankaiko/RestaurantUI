import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-picklist',
  standalone: false,
  templateUrl: './campo-picklist.component.html',
  styleUrls: ['./campo-picklist.component.css']
})
export class CampoPicklistComponent implements OnInit {
  @Input() labelText: string;
  @Input() campoTextoStyle: { [key: string]: string; } = {};
  @Input() classeLabel: { [key: string]: string; } = {};
  @Input() lista: any[];

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
