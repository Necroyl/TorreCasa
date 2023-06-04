import { Usuario } from "../../auth/interfaces/usuario";

export interface Vivienda {
  _id?: string,
  direccion: string,
  planta: number,
  puerta?: string,
  lat: number,
  lng: number,
  descripcion: string,
  precio: number,
  fotos: string[],
  propietario: Usuario,
  mine?: boolean;
}


