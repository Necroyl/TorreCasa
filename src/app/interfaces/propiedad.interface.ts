import { Usuario } from "../auth/interfaces/usuario"

export interface Propiedad {
  id?: number,
  direccion: string,
  planta: number,
  puerta?: string,
  lat?: number,
  lng?: number,
  metros: number,
  habitaciones: number,
  banyos: number,
  cocina: [ 'americana', 'cerrada' ],
  terraza: boolean,
  balcon: boolean,
  piscina: boolean
  estado: ['nueva', 'segunda', 'reforma'],
  precio: number,
  fotos?: String[],
  propietario: Usuario
}


