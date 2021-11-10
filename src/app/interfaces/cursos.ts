export interface Cursos {
    id:number;
    nombreCurso:string;
    promedio:number;

}

export let ListaCursos:Array<Cursos>=[{
    id:1,
    nombreCurso: "Física",
    promedio:6.7
},
{
    id:2,
    nombreCurso:"Matemáticas",
    promedio:5.0
},
{
    id:3,
    nombreCurso:"Programacion",
    promedio:3.0
},
{
    id:4,
    nombreCurso:"Ingeniería Web",
    promedio:6.9
}]