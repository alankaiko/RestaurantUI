import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'campo-button',
  templateUrl: './campo-button.component.html',
  styleUrls: ['./campo-button.component.css']
})
export class CampoButtonComponent implements OnInit {
  @Input() labelText: string;
  @Input() labelButton: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() disabled: boolean = false;
  @Input() possuiLabel: boolean = false;
  @Input() possuiImagem: boolean = false;
  @Input() src: string;
  @Input() classeButton: { [key: string]: string; } = {};

  constructor() { }

  ngOnInit(): void {
  }
}
