/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
//!Desestructuración de Objetos

const { volumen: vol, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

//console.log('El volumen actual es de: ', vol);
//console.log('El segundo actual es de: ', segundo);
//console.log('La canción actual es: ', cancion);
//console.log('El autor es: ', autor);


//!Desestructuración de Arreglos

const langProgramming: string[] = ['JavaScript', 'Java', 'PHP'];

//const [ p1, p2, p3 ] = langProgramming;
const [,,p3] = langProgramming;
//console.log('Personaje 1: ', p1 );
//console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );
