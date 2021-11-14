const country = "England";
const continent = "Europe";
let population = 49000000;
population++;
const isIsland = false;
const language = "English";
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
const numNeighbours = 1;//"How many neighbour countries does your country have?";

if (population > 33000000) {
    console.log(`${country}s population is above average.`)
} else {
    console.log(`${country}s population is below average.`)
};

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
// console.log(description);

/*
if (numNeighbours == 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No borders")
}
*/

if (language == "English", population < 50000000, isIsland == false) {
    console.log("You should live in England!")
} else {
    console.log("England does not meet your criteria")
};