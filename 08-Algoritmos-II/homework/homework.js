'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <=1) return array;
   // Math.random () me da valores entre [0,1) cero inclusive 1 no inclusive
  // Math.random () * array.length nos va a dar valores entre  [0 y la longitud de mi arreglo) 
  //me puede dar valores con coma, y si estoy buscando un indice tengo que redondear con Math.floor
  //Math.floor(Math.random*array.length) me da valores enteros entre [0,4)
  // me da indices del 0 al 3.
  // array[del indice que acabo de calcular] ese va a ser mi pivote. 
  // array[Math.floor(Math.random()*array.length)]
  let pivot = array[Math.floor(Math.random()*array.length)];
  let right = [];// todos los numeros del array mayor a pivot
  let left = []; // todos los numeros del array menor a pivot
  let equals = []; // pivote y cualquier numero que sea igual a el

  for(let i = 0; i < array.length; i++){
    if(array[i]< pivot){
      left.push(array[i]);
    } else if(array[i] > pivot){
      right.push(array[i]);
    } else{
      equals.push(array[i]);
      }
    }
    return quickSort(left).concat(equals).concat(quickSort(right));
  }


  function our_split(array){
    let middle= Math.floor(array.length/2);
    let left= array.slice(0,middle) // slice este metdodo devuelve una copia de una porcion de un arreglo, en un nuevo arreg\lo.
    let right= array.slice(middle); // lo que hace es pasarle la copia desde le medio hasta array.length right=[middle, array.length}
    return [left, right];
  } 
  function merge(left, right){
    let leftIndex =0 ;
    let rightIndex = 0;
    let array=[];
    while(leftIndex<left.length && rightIndex< right.length){
      if(left[leftIndex] < right[rightIndex]){
        array.push(left[leftIndex]);
        leftIndex++;
      } else {
        array.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //
  if(array.length === 1) return array;
  let div = our_split(array); 
  let left = div[0];
  let right = div[1];
return merge(mergeSort(left),mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
