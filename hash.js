/*ñ
Tabla hash en javascrip 
*/

//Creacción de la tabla contendedora de la llaves y valores
class TablaHash {
    constructor(){
        //Tabla con una array de 150
        this.tabla = new Array(150); 
        //tamaño inicial de la tabla
        this.tamano = 0;
    }
    
    //Recorrer la cadena para obtener el codigo del caractere en ascii
    Thash(llave) {
        //Dejamos hash en o 
        let hash = 0;
        // iniciando i en 0; hacer cuando i sea menor a la longitud de la llave; incrementar i
        for (let i = 0; i < llave.length; i++){
            //hash obtiene el codigo ascii de la llave y se van sumando los nuevos resultados de la derecha 
            hash += llave.charCodeAt(i);
        }
        //Retronamos hash con los codigos de carateres 
        return hash % this.tabla.length;
    }
   
    //Declaramos la instrucciones de set 
    set(llave, valor) {
        //el indice cuyo valor es la suma de todos los codigos de caracteres de la llave
        const indice = this.Thash(llave);
        //llave y valor se guardaran en la tabla con indice "n" 
        this.tabla[indice] = [llave, valor];
        //el tamaño de la tabla se incrementa
        this.tamano++;
    }
   
    //Declaramos la instrucciones de get
    get(llave) {
        //Buscar con el valor de llave devuelto de Thash
        const objetivo = this.Thash(llave);
        //Retornamos los datos en la tabla
        return this.tabla[objetivo];
    }
    
}

//Iniciamos creando la tabla contenedora
const ht = new TablaHash();

//Colocamos la llave y el valor con la función set previamente declarada
ht.set("Tiros a puerta", 27);
ht.set("Remates", 11);
ht.set("2", "Rodrigo");
ht.set("Fuera juego", 5);

//Mostramos en consola la llave y el valor con la función get previamente declarada
console.log(ht.get("Tiros a puerta"));
console.log(ht.get("Remates"));
console.log(ht.get("2"));
console.log(ht.get("Fuera juego"));
