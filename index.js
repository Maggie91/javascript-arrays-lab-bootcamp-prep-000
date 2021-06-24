var kittens = ["Milo", "Otis", "Garfield"];

<<<<<<< HEAD
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  let newCat = new Array(name);
  return newCat.concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
=======
var kittens = ["Milo", "Otis", "Garfield"]
>>>>>>> facde10a4a82840578e2b4b56ab8de5783edbd23
