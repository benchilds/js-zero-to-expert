'use strict'

/*
const country = "England";
const continent = "Europe";
let population = 70000000;
population++;
const isIsland = false;
const language = "English";
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
const numNeighbours = 1;//"How many neighbour countries does your country have?";

population >= 33000000 ? console.log(`${country}s population is above average`) : console.log(`${country}s population is below average`);

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);
console.log(description);

if (numNeighbours == 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No borders")
}


if (language == "English", population < 50000000, isIsland == false) {
    console.log("You should live in England!")
} else {
    console.log("England does not meet your criteria")
};

switch (language) {
    case "Chinese":
        console.log("MOST number of native speakers")
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}
*/


function describeCountry(country, population, capitalCity) {
    const explanation = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return explanation;
}

const englandExplanation = describeCountry("England", 70000000, "London");
console.log(englandExplanation);

const americaExplanation = describeCountry("America", 300000000, "New York");
console.log(americaExplanation);


// Function Declaration
function percentageOfWorld1(population) {
    return population / 7900000000 * 100;
}

const populationPercentEngland = percentageOfWorld1(70000000);
const populationPercentAmerica = percentageOfWorld1(300000000);
const populationPercentChina = percentageOfWorld1(1500000000);
console.log(populationPercentEngland, populationPercentAmerica, populationPercentChina);


// // Function Expressioin
// const percentageOfWorld2 = function (population) {
//     return population / 7900000000 * 100;
// }

// const percentOfEngland = percentageOfWorld2(70000000);
// const percentOfAmerica = percentageOfWorld2(300000000);
// const percentOfChina = percentageOfWorld2(1500000000);
// console.log(percentOfEngland, percentOfAmerica, percentOfChina);


// Arrow Function
const percentageOfWorld3 = population => (population / 7900000000) * 100;
const percEngland = percentageOfWorld3(70000000);
const percChina = percentageOfWorld3(1500000000);
const percAmerica = percentageOfWorld3(300000000);
console.log(percEngland, percChina, percAmerica);

// Functions calling other functions
const percentageOfWorld2 = function (population) {
    return population / 7900000000 * 100;
}


const describePopulation = function (country, population) {
    const popSentence = `${country} has ${population} people, which is about ${percentageOfWorld2(population)} percent of the world`;
    return popSentence;
}

console.log(describePopulation("England", 70000000));
console.log(describePopulation("China", 1500000000));
console.log(describePopulation("America", 300000000));










