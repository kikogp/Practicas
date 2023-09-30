//1
//1.1
type Pasajero={

    LugarOrigen?:string;
    Nombre?:string;
    Altura:number;
    Edad:number;
    Peso:number;
    Genero:string;
    Infeccion?:boolean;

}

//1.2
const PasajerosCapsula:Pasajero[] = 
[{Altura:200,Edad:35, Peso:110, Genero: "H"},
{Nombre:"Ana",LugarOrigen:"Tierra",Altura:170,Edad:18,Peso:65,Genero: "M"},
{Nombre:"Javi",Altura:184,Edad:27,Peso:80,Genero: "M"},
{Nombre:"Laura",Altura:160,Edad:40,Peso:60,Genero: "M",}];

interface NaveEspacial{

    Peso:number;
    Dimensiones:string;
    CapacidadVelocidadCurvatura:number;
    Pasajeros?:Pasajero[];

}

const Capsula:NaveEspacial = {
    Peso:5000,
    Dimensiones:"50x30",
    CapacidadVelocidadCurvatura: 800000,
    Pasajeros: PasajerosCapsula,

}

//1.3
const PasejerosEnterpirse:Pasajero[] = 
[{Nombre:"Spok", Altura:180, Edad:30, Peso:80, Genero:"H",Infeccion:true},
 {Nombre:"James T. Kirk", Altura:175, Edad:40, Peso:75, Genero:"H",Infeccion:false},
 {Nombre:"Elizabeth Dehner", Altura:157, Edad:30,Peso:53, Genero:"M", Infeccion:false},
 {Nombre:"Christine Chapel", Altura:160, Edad:50, Peso:55, Genero:"M", Infeccion:false},
 {Nombre:"John Farrell", Altura:170, Edad:40, Peso:61, Genero:"H", Infeccion:true}
]

let Enterprise:NaveEspacial = {

    Peso:10000,
    Dimensiones:"100x60",
    CapacidadVelocidadCurvatura: 1200000,
    Pasajeros:PasejerosEnterpirse

}
//1.4
PasajerosCapsula.filter((elem) =>  (elem.Nombre !== undefined)).forEach((elem) => console.log(elem.Nombre,elem.Altura,elem.Edad,elem.Genero,elem.Peso,elem.LugarOrigen));


//2
//2.1
PasejerosEnterpirse.forEach((e) =>{ if(e.Infeccion !== true) console.log(e.Nombre);});

//2.2
console.log(PasejerosEnterpirse.some(e => e.Infeccion === true ));
console.log(PasejerosEnterpirse.every(e => e.Infeccion === false));
console.log(PasejerosEnterpirse.find(e => e.Infeccion === true)?.Nombre);

//3
//3.1
const fechas:Array<string> = ["hhhhh","aaaaaaaa","","2500","2000",":D D: :) :( :O","1578","AaAaAAa","2553"];

const fechasComprensibles = fechas.filter(e => e);



//4
const turboConductos:Array<Array<number>> = [[21, 9], [10, 50],[30,20],[24,11]];

const totTribbles= turboConductos.reduce((x,e) => {

    if(e[0] > 20) return x + e[1];
    else return x;

},0)
console.log(totTribbles);

const señalLisa = turboConductos.flat;
console.log(señalLisa);

const señalLisaPeligro = turboConductos.flatMap((e) => {
    if(e[1] - (e[0]/100 * 50) > 0)  return "peligro";
    else return "sin peligro";
})

console.log(señalLisaPeligro);