import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Distribucion, Ubicacion } from 'src/app/interfaces/propiedad.interface';

@Component({
  selector: 'app-agregar-dist',
  templateUrl: './agregar-distribucion.component.html',
  styles: [
  ]
})
export class AgregarDistComponent implements OnInit {
  ubicacion!: Ubicacion;
  distribucion!: Distribucion;

  opcionesCocina = [
    { value: 'cerrada', label: 'Cerrada' },
    { value: 'americana', label: 'Americana' }
  ];

  miFormulario: FormGroup = this.fb.group({
    metros: ['', [Validators.required, Validators.min(26)]],
    habitaciones: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    banyos: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    cocina: ['', [Validators.required]],
    terraza: [ false, [Validators.required]],
    balcon: [ false, [Validators.required]],
    piscina: [ false, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ubicacion = this.route.snapshot.queryParams as Ubicacion;
  }

  agregar(){
    this.distribucion = this.miFormulario.value;
    this.router.navigate(['/nuevo/propiedad'], { queryParams: [this.ubicacion, this.distribucion]})
  }
}
