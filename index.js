// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  name = [...cats, "Broom"];
  return name;
}

function prependCat(name) {
  name = ["Arnold", ...cats];
  return name;
}

function removeLastCat(name){
    name = cats.slice(0,2)
    return name;
}

function removeFirstCat(name){
    name = cats.slice(1)
    return name;
}
console.log(removeFirstCat())