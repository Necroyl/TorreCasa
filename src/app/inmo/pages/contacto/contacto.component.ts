import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit{
  correo?: string | null = '';

  constructor( private route: ActivatedRoute,
              private messageService: MessageService,
              private router: Router,
              ) {}

  ngOnInit(): void {
    this.correo = this.route.snapshot.paramMap.get('correo');
  }

  contactForm(form: any) {
    this.messageService.sendMessage(form).subscribe( (resp: any) => {
      if(resp && resp.ok){
        Swal.fire('¡Éxito!', resp.msg, 'success').then( () =>{
          this.router.navigateByUrl('/inmo/listado')
        });
      } else{
        Swal.fire('¡Lo siento!', resp.msg, 'error').then( () =>{
          this.router.navigateByUrl('/inmo/listado')
        });
      }

    });
  }
}
