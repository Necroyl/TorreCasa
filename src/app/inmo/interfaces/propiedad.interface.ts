import { Usuario } from './../../auth/interfaces/usuario'

export interface Propiedad {
  id?: number,
  distribucion: Distribucion,
  ubicacion: Ubicacion,
  estado: ['nueva', 'segunda mano', 'reformada'],
  precio: number,
  fotos: string[],
  propietario: Usuario
}

export interface Distribucion {
  metros: number,
  habitaciones: number,
  baños: number,
  cocina: [ 'americana', 'cerrada' ],
  terraza: boolean,
  balcon: boolean,
  piscina: boolean
}

export interface Ubicacion {
  calle: string,
  numero: number,
  portal: string,
  bloque: string,
  piso: number,
  puerta: string
  lat: number,
  lng: number
}

