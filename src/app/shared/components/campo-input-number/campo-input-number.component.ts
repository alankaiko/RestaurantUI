import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-input-number',
  templateUrl: './campo-input-number.component.html',
  styleUrls: ['./campo-input-number.component.css']
})
export class CampoInputNumberComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() readonly: boolean = false;
  @Input() id: string;
  @Input() showButtons: boolean = false;
  @Input() mostrarLabel: boolean = true;
  @Input() buttonLayout: string = 'horizontal';
  @Input() spinnerMode: string = 'vertical';
  @Input() decrementButtonClass: string;
  @Input() incrementButtonClass: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() incrementButtonIcon: string = 'pi pi-plus';
  @Input() decrementButtonIcon: string = 'pi pi-minus';

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
