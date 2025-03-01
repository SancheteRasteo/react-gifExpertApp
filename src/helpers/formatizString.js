

export const formatizString = (s) => {

    /** 
     * Borra los espacios, guiones "-" y dos puntos ":", y convierte el texto a minúsculas
     * 
     * @param {string} s - Valor valido ingresado en el input
     * @returns {string} String formateado
     * 
     * @example
     * formatizString("Re:ZERO - "); // "rezero"
    */
    
    return s.replace( /[\s\-:]+/g, '' ).toLowerCase();  //Elimina los espacios y manda a lowercase

}