// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
    var arr = nombre.split(""); 
    nombre = arr[0].toString().toUpperCase();
   // return nombre;
     for(i=1;i<arr.length; i++){
              nombre=nombre+arr[i];
      }
      return nombre;  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
   
     return cb();
   
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  suma=0;
  for(i=0; i< numeros.length; i++){
      suma=suma+ numeros[i];
  }
  return cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(cb);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  arr= [];
  for(i=0; i<array.length;i++){
    arr.push(cb(array[i]));
  }
  return arr;
  

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 
  arr=[];
  for(i=0; i<array.length; i++){
    if(array[i][0]== "a"){
        arr.push(array[i]);
    }
  }
  return arr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
