/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ){}


}

class Heroe extends PersonaNormal{
    //!No hace falta declarar las variables en la clase, dado a que puede conllevar demasiado tiempo
    //* Para esto se definen en el constructor dado a que es mucho mas rapido
    //Info: A diferencia de la interface, las clases si pueden manipular las funciones, las interfaces no.
    //?Las interfaces solo pueden definir el tipo de retorno de la función pero no define su comportamiento.
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;

    constructor( 
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string,        
        ) {
            super( nombreReal, 'New York, USA');
        }
    imprimirDatos() {
        return this.alterEgo + ' ' + this.edad + ' ' + this.nombreReal;
    }
}

const batman = new Heroe( 'Batman', 45, 'Bruce Wayne' );

console.log( batman );

