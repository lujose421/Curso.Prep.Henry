// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   let arr=Object.entries(objeto);
   return arr;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  str=string.split('');
  // temp= str[0];
   
   var objeto = new Object();
  // objeto[temp.toString()]=1;

   for(i in str){
    temp= str[i];
        if(objeto.hasOwnProperty(temp.toString()) ){
          mm=objeto[temp.toString()];
          mm++;
          objeto[temp.toString()]=mm;
        }else{
          objeto[temp.toString()]=1;
        }
   }



  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arr1="", arr2="";
  var arreglo= s.split('');
  for(i=0;i<arreglo.length;i++){
    co=arreglo[i];
    co=co.toUpperCase();
    if(arreglo[i]==co){
      arr1=arr1+arreglo[i];
    }else{
      arr2=arr2+arreglo[i];
    }

  }
  arr1=arr1+arr2;
  return arr1;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var cad= str.split(" ");
  str ="";
  for(i in cad){
    if(i!=0){
      str=str+" ";
    }
    ced= cad[i];
    ced=ced.split('').reverse().join('');
    str = str +ced;
  }
  return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  /*var aux= numero, cifra, inverso;
  while(aux!=0){
      cifra =aux%10;
      inverso=inverso*10+cifra;
      aux=aux/10;
  }*/
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )

  if(numero == invertido){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cad="";
  for(i=0; i< cadena.length;i++){
    if(cadena.charAt(i)!="a" && cadena.charAt(i)!="b" && cadena.charAt(i)!="c"){
      cad=cad+cadena.charAt(i);
    }
  }
  return cad;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(j=0; j<arr.length-1;j++){
  for(i=0; i<arr.length-1;i++){
    if(arr[i].length>arr[i+1].length){
       cons=arr[i];
       arr[i]=arr[i+1];
       arr[i+1]=cons;
    }
  }
}
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  arr=[];
  for(var i in arreglo1) {
    for(var j in arreglo2){
      if(arreglo1[i]== arreglo2[j]){
        arr.push(arreglo2[j]);
      }
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

