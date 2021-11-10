import { Component, OnInit } from '@angular/core';
import { ListaCursos,Cursos } from 'src/app/interfaces/cursos';
import { ListaCursosDetalle } from 'src/app/interfaces/curso-detalle';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  ListaCursos=ListaCursos;
  ListaCursosDetalle=ListaCursosDetalle
  id:any;
  Curso:any;
  CursoDetalle:any;
  Color:any;
  constructor() { }

  ngOnInit(): void {
    
  }

  

 
}
















//let promedio = 0;

//let ptotal = 0;
//let aux ;= 0;
//cont = 0
//for(let i = 0; i < notas.lenght[]; i++){
//  aux = (notas[i]*(p
//  cont++;orcentaje[i]/100));
//  suma = suma + aux;
//}
//cont;')(//promedio = suma / //