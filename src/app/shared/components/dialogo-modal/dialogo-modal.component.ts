import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'dialogo-modal',
  templateUrl: './dialogo-modal.component.html',
  styleUrls: ['./dialogo-modal.component.css']
})
export class DialogoModalComponent implements OnInit {
  @Input() exibir = false;
  @Output() exibirChange = new EventEmitter<boolean>();
  @Output() onShow = new EventEmitter<any>();
  @Input() closable: boolean = false;
  @Input() modal: boolean = false;
  @Input() style: { [key: string]: string; } = {};
  @Input() draggable: boolean = false;
  @Input() resizable: boolean = false;
  @Input() header: string;
  @ContentChild('cabecalho') cabecalho!: TemplateRef<any>;
  @ContentChild('conteudo') conteudo!: TemplateRef<any>;
  @ContentChild('rodape') rodape!: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  onHide() {
    this.exibir = false;
    this.exibirChange.emit(false);
  }
}
