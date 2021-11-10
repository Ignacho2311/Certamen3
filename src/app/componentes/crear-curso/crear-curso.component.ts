import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CrearCursosServicioService } from 'src/app/crear-cursos-servicio.service';
import { ListaCursosDetalle } from 'src/app/interfaces/curso-detalle';
import { ListaCursos } from 'src/app/interfaces/cursos';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {
  activarMsj:boolean=false;
  formulario:FormGroup;

  constructor(public Form:FormBuilder,public Servicio:CrearCursosServicioService) {
    this.formulario=Form.group({
      id:["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      nombre: ["",[Validators.required,Validators.maxLength(25)]],
      nota1: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      nota2: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      nota3: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      nota4: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      nota5: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      porcentaje1: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      porcentaje2: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      porcentaje3: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      porcentaje4: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
      porcentaje5: ["",[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],

    })
   }

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsj=true;

    this.Servicio.EnviarDatos({"id":this.formulario.get("id")?.value, "nombre":this.formulario.get("nombre")?.value,"nota1":this.formulario.get("nota1")?.value,"nota2":this.formulario.get("nota2")?.value,"nota3":this.formulario.get("nota3")?.value,"nota4":this.formulario.get("nota4")?.value,"nota5":this.formulario.get("nota5")?.value,"porcentaje1":this.formulario.get("porcentaje1")?.value,"porcentaje2":this.formulario.get("porcentaje2")?.value,
    "porcentaje3":this.formulario.get("porcentaje3")?.value,"porcentaje4":this.formulario.get("porcentaje4")?.value,"porcentaje5":this.formulario.get("porcentaje5")?.value,
    })

    
    console.log(this.Servicio.ListaCursosDetalle.push({"id":this.formulario.get("id")?.value, "nombre":this.formulario.get("nombre")?.value,"nota1":this.formulario.get("nota1")?.value,"nota2":this.formulario.get("nota2")?.value,"nota3":this.formulario.get("nota3")?.value,"nota4":this.formulario.get("nota4")?.value,"nota5":this.formulario.get("nota5")?.value,"porcentaje1":this.formulario.get("porcentaje1")?.value,"porcentaje2":this.formulario.get("porcentaje2")?.value,
    "porcentaje3":this.formulario.get("porcentaje3")?.value,"porcentaje4":this.formulario.get("porcentaje4")?.value,"porcentaje5":this.formulario.get("porcentaje5")?.value,
    }))
    console.log(this.Servicio.ListaCursosDetalle);

  


    console.log(this.Servicio.ListaCursos.push({"id":this.formulario.get("id")?.value, "nombreCurso":this.formulario.get("nombre")?.value,"promedio":this.formulario.get("nota1")?.value}))

    console.log(this.Servicio.ListaCursos);

    
  }


}
