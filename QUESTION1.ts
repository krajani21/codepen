### QUESTION 1

  // You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes();
console.log("Pokes", pokes);

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";
const answer1 = []; // TODO

pokes.forEach((pokemon) => {
  if(pokemon.types.includes(type)){
    answer1.push(pokemon.name);
  }
});

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
const answer2And = []; // TODO

pokes.forEach((pokemon) =>{
  if (types.some(t => pokemon.types.includes(t))){
    answer2Or.push(pokemon.name);
  }
  if (types.every(t => pokemon.types.includes(t))){
    answer2And.push(pokemon.name);
  }
});


// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
