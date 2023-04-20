import { Propiedad } from "src/app/inmo/interfaces/propiedad.interface";

export interface Usuario {
  id?: number,
  nombre: string,
  apellidos: string,
  email: string,
  pass: string,
  id_usuario: string,
  avatar: string,
  favoritos: [ Propiedad ],
  misProp: [ Propiedad ]
}
