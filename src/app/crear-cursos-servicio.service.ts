import { Injectable } from '@angular/core';
import { CursoDetalle } from './interfaces/curso-detalle';
import { ListaCursosDetalle } from './interfaces/curso-detalle';
import { ListaCursos } from './interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class CrearCursosServicioService {

  ListaCursosDetalle=ListaCursosDetalle;
  ListaCursos=ListaCursos
  
  constructor() { }
  EnviarDatos(Datos:CursoDetalle){
    console.log(JSON.stringify(Datos));
      console.log((Datos.nota1*(Datos.porcentaje1/100))+(Datos.nota2*(Datos.porcentaje2/100))+(Datos.nota3*(Datos.porcentaje3/100))+(Datos.nota4*(Datos.porcentaje4/100))+(Datos.nota5*(Datos.porcentaje5/100)));
      
  }
  
}
