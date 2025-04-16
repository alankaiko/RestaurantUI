import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'campo-badge',
  templateUrl: './campo-badge.component.html',
  styleUrls: ['./campo-badge.component.css']
})
export class CampoBadgeComponent implements OnInit {
  @Input() class = "";
  @Input() severity: string;
  @Input() style: { [key: string]: string; } = {};
  @Input() texto: any;
  @Input() click: any;

  ngOnInit(): void {
  }
}
