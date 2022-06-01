"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if(value >= this.value){
    if(this.right === null){
      this.right =new BinarySearchTree(value)
    } else {
      this.right.insert(value);
    }
  } else if( value< this.value){
// izquierda
    if(this.left===null){
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }

  }

};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if(value>this.value){
  // derecha
  if(this.right === null){
    return false;
  } else {
    return this.right.contains(value);
  }
  } else if (value < this.value){
    //izquiera
    if(!this.left){
      return false;
    } else{
      return this.left.contains(value)
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(fn,order){
  
  switch (order) {
    case 'pre-order':
       //pre-order. value- izq - der
       fn(this.value)
       if(this.left !== null) this.left.depthFirstForEach(fn,order);
       if(this.right !== null) this.right.depthFirstForEach(fn,order);
      break;
      case 'post-order':
      //post- order. izq - der- value
      
       if(this.left !== null) this.left.depthFirstForEach(fn,order);
       if(this.right !== null) this.right.depthFirstForEach(fn,order);
       fn(this.value)
      break;
  
    default:
      //in-order.izq - value - der
      if(this.left !== null) this.left.depthFirstForEach(fn,order);
      fn(this.value)
      if(this.right !== null) this.right.depthFirstForEach(fn,order);
      break;
  }

};

BinarySearchTree.prototype.breadthFirstForEach = function(fn,array=[]){
    fn(this.value)
 
    if(this.left) {
      array.push(this.left)
    }
    if (this.right){
      array.push(this.right)
    }
    
    if (array.length){
      array.shift().breadthFirstForEach(fn,array)
    }
};

BinarySearchTree.prototype.size = function(){
  if(!this.right && !this.left) return 1;
  if(!this.right && this.left) return 1 + this.left.size();
  if(this.right && !this.left) return 1 + this.right.size();
  if(this.right && this.left) return 1 + this.right.size() + this.left.size();
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
