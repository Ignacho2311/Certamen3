import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"header",component:HeaderComponent},
  {path:"detalleCurso/:id",component:DetalleCursoComponent},
  {path:"crearCurso",component:CrearCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
