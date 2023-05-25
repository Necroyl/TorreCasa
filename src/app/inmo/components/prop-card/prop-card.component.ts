import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vivienda } from 'src/app/interfaces/vivienda.interface';

@Component({
  selector: 'app-prop-card',
  templateUrl: './prop-card.component.html',
  styles: [
    `
    .btn-fuchsia {
      background-color: #f805fb;
      border-color: #f805fb;
      color: white;
    }
    `
  ]
})
export class PropCardComponent {
  @Input() vivienda?: Vivienda;
  @Output() deleted = new EventEmitter<void>();

  delete(){
    this.deleted.emit();
  }
}
