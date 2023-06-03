import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/auth/interfaces/usuario';
import { AuthService } from 'src/app/auth/services/auth.service';
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
export class PropCardComponent implements OnInit{
  @Input() vivienda?: Vivienda;
  @Output() deleted = new EventEmitter<void>();
  usuario?: Usuario;

  constructor( private authService: AuthService ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUserData();

    if(this.vivienda?.propietario == this.usuario?.uid) {
      this.vivienda!.mine = true;
    } else {
      this.vivienda!.mine = false;
    }
  }

  delete(){
    this.deleted.emit();
  }
}
