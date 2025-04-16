import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'campo-button-de-lista',
  templateUrl: './campo-button-de-lista.component.html',
  styleUrls: ['./campo-button-de-lista.component.css']
})
export class CampoButtonDeListaComponent implements OnInit {
  @Input() labelText: string;
  @Input() labelButton: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() disabled: boolean = false;
  @Input() possuiLabel: boolean = true;
  @Input() possuiImagem: boolean = true;
  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
