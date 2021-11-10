
export interface CursoDetalle {
    id:number;
    nombre:string;
    nota1:number;
    nota2:number;
    nota3:number;
    nota4:number;
    nota5:number;
    porcentaje1:number;
    porcentaje2:number;
    porcentaje3:number;
    porcentaje4:number;
    porcentaje5:number;

}


export let ListaCursosDetalle:Array<CursoDetalle>=[{
    id:1,
    nombre:"Física",
    nota1:2,
    nota2:3.4,
    nota3:5,
    nota4:6,
    nota5:5.9,
    porcentaje1:20,
    porcentaje2:20,
    porcentaje3:20,
    porcentaje4:20,
    porcentaje5:20,
},
{
    id:2,
    nombre:"Matemática",
    nota1:2.3,
    nota2:3,
    nota3:4.5,
    nota4:6,
    nota5:2.9,
    porcentaje1:30,
    porcentaje2:20,
    porcentaje3:10,
    porcentaje4:30,
    porcentaje5:10,
},
{
    id:3,
    nombre:"Programacion",
    nota1:2.3,
    nota2:3,
    nota3:4.5,
    nota4:6,
    nota5:5.9,
    porcentaje1:20,
    porcentaje2:20,
    porcentaje3:20,
    porcentaje4:20,
    porcentaje5:20,
},
{
    id:4,
    nombre:"Ingeniería WEB",
    nota1:5.6,
    nota2:3.2,
    nota3:4.5,
    nota4:6,
    nota5:2.9,
    porcentaje1:20,
    porcentaje2:20,
    porcentaje3:10,
    porcentaje4:25,
    porcentaje5:25,
}
];
