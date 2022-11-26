// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const cats_app = [...cats, name];
  return cats_app;
}

function prependCat(name) {
  const cats_prep = [name, ...cats];
  return cats_prep;
}

function removeLastCat() {
  const cats_last = cats.slice(0, -1);
  return cats_last;
}

function removeFirstCat() {
  const cats_first = cats.slice(1);
  return cats_first;
}
console.log(removeFirstCat);