import { Component, Input } from '@angular/core';
import { PropIdealista } from '../../../interfaces/inerfaz-idea.interface';

@Component({
  selector: 'app-prop-card',
  templateUrl: './prop-card.component.html',
  styles: [
  ]
})
export class PropCardComponent {
  @Input() propiedad!: PropIdealista;

}
