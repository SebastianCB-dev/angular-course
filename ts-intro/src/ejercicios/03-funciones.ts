/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number):number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}
//const resultado = multiplicar( 5, 0, 10 );

//console.log(resultado);

interface PersonajeLOL {
    nombre: string;
    pv: number;
    mostrarHp(): void;
}


function curar( personaje: PersonajeLOL, curarX: number ): void {

    personaje.pv += curarX;
    
    console.log(personaje);    

}

const nuevoPersonaje: PersonajeLOL = { 
    nombre: 'Senna',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();


