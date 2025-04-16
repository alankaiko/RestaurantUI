import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-upload',
  templateUrl: './campo-upload.component.html',
  styleUrls: ['./campo-upload.component.css']
})
export class CampoUploadComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() campoTextoStyle: { [key: string]: string; } = {};
  @Input() id: string;
  @Input() chooseLabel = "Anexar";
  @Input() chooseIcon = "pi pi-upload";
  @Input() accept = "image/*,application/*";
  @Input() headers: any;
  @Input() url: any;
  @Input() mode: string = 'basic';
  @Input() multiple: boolean = false;
  @Input() auto: boolean = true;
  @Input() possuiLabel: boolean = true;
  @Input() maxFileSize: any;
  @Input() name: string = 'anexo';
  @Output() onUpload: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

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
