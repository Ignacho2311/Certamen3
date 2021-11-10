import { Component, OnInit } from '@angular/core';
import { ListaCursos } from 'src/app/interfaces/cursos';
import { ListaCursosDetalle } from 'src/app/interfaces/curso-detalle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss']
})
export class DetalleCursoComponent implements OnInit {

  ListaCursos=ListaCursos;
  ListaCursosDetalle=ListaCursosDetalle;
  id:number=0;
  Curso:any;
  DetalleCurso:any;
  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
  }

  ngOnInit(): void {
    this.Curso=ListaCursos.find(objeto=>objeto.id==this.id);
    this.DetalleCurso=ListaCursosDetalle.find(objeto=>objeto.id==this.Curso.id);
    console.log(this.DetalleCurso);
  }

}
