import { Usuario } from "../auth/interfaces/usuario";

export interface Vivienda {
  _id?: number,
  direccion: string,
  planta: number,
  puerta?: string,
  lat: number,
  lng: number,
  descripcion: string,
  precio: number,
  foto: File,
  propietario?: Usuario,
  mine?: boolean;
}


