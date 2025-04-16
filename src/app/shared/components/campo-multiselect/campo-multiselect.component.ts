import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-multiselect',
  templateUrl: './campo-multiselect.component.html',
  styleUrls: ['./campo-multiselect.component.css']
})
export class CampoMultiselectComponent implements OnInit {
  @Input() entidades: any[] = [];
  @Input() selectionMode: string = 'single';
  @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
  @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();

  private _selectionSelecionado!: any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get selection(): any {
    return this._selectionSelecionado;
  }

  @Input() set selection(value: any) {
    if (this._selectionSelecionado === value)
      return;

    this._selectionSelecionado = value;
    this.selectionChange.emit(this._selectionSelecionado);
  }
}
