import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from "@angular/core";
import {Table} from 'primeng/table';
import {get} from 'lodash';
import {LazyLoadEvent} from "primeng/api";
import {EnumLabelCores} from "../../shared-utils/enuns/enum-label-cores";
import {ColumnTable} from "../../core/ColumnTable";

@Component({
  selector: 'tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit {
  @Input() entidades: any[] = [];
  @Input() colunas: ColumnTable[] = [];
  @Input() dataKey!: string;
  @Input() rowHover: boolean = false;
  @Input() lazy: boolean = false;
  @Input() showCurrentPageReport: boolean = false;
  @Input() paginator: boolean = false;
  @Input() rows: number = 12;
  @Input() totalRecords!: number;
  @Input() selectionMode: string = '';
  @Input() styleClass: string;
  @Input() classLinha: string;
  @Input() globalFilterFields!: string[];
  @Input() exportHeader!: string;
  @Input() responsiveLayout!: string;
  @Input() possuiFiltro: boolean = false;
  @ViewChild('filtroTabela') filtroTabela: ElementRef;
  @Output() onLazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>();

  @ContentChild('pesquisar') pesquisarRef!: TemplateRef<any>;
  @ContentChild('acoes') acoesRef!: TemplateRef<any>;
  @ContentChild('ver') verRef!: TemplateRef<any>;

  private _selectionSelecionado!: any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clear(table: Table) {
    table.clear();
    this.filtroTabela.nativeElement.value = '';
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

  getValorDoCampo(value: any, coluna: ColumnTable): any {
    const result = get(value, coluna.field);
    if (coluna.transformer != null)
      return coluna.transformer(result, value);

    return result;
  }

  configurarCor(cor: EnumLabelCores) {
    switch (cor) {
      case EnumLabelCores.gray:
        return '#D9D9D9';
      case EnumLabelCores.yellow:
        return '#FFFFCC';
      case EnumLabelCores.turquoise:
        return '#A1D5E6';
      case EnumLabelCores.green:
        return '#ACE8CC';
      case EnumLabelCores.lightblue:
        return '#43D3F7';
      case EnumLabelCores.orange:
        return '#D4A26F';
      case EnumLabelCores.white:
        return '#ffffff';
      default:
        return '#ffffff';
    }
  }
}
