import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'stick-aviso',
  templateUrl: './stick-aviso.component.html',
  styleUrls: ['./stick-aviso.component.css']
})
export class StickAvisoComponent implements OnInit {
  @Input() severity: string = 'warning';
  @Input() summary: string = 'Aviso';
  @Input() detail: string;
  @Input() life: number = 6000;
  @Input() marginBottom: number = 80;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  private MostrarMensagem() {
    this.messageService.add(
        {
          severity: this.severity,
          summary: this.summary,
          detail: this.detail, life: this.life
        }
      );
  }

}
