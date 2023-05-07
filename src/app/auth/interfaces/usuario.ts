import { Propiedad } from "src/app/interfaces/propiedad.interface";

export interface AuthResponse {
  ok: boolean,
  uid?: string,
  name?: string,
  email?: string,
  token?: string,
  msg?: string
}

export interface Usuario {
  uid: string,
  name: string,
  email: string,
  nombre?: string,
  apellidos?: string,
  avatar?: string,
  favoritos?: [ Propiedad ],
  misProp?: [ Propiedad ]
}
