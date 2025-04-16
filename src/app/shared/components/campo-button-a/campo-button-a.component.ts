import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'campo-button-a',
  templateUrl: './campo-button-a.component.html',
  styleUrls: ['./campo-button-a.component.css']
})
export class CampoButtonAComponent implements OnInit {
  @Input() style: { [key: string]: string; } = {};
  @Input() possuiImagem: boolean = false;
  @Input() classeButton: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
