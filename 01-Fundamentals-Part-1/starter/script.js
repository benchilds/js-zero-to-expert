/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convebtions
let jonas_matilda = "JM";
let $function = 27;


let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "friendsOfHam");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = "programmer";
job = "teacher";

lastName = "Childs";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageEwan = now - 1998;
console.log(ageJonas, ageEwan);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25;
x *= 10; //x = x * 10 = 250;
x++ // x + 1;
x-- // x - 1;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageEwan);
console.log(ageEwan >= 29);

const isFullAge = ageEwan >= 18;

console.log(now - 1991 > now - 1998);


const now = 2037;
const ageJonas = now - 1991;
const ageEwan = now - 1998;

console.log(now - 1991 > now - 1998);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = (ageJonas + ageEwan) / 2;
console.log(ageJonas, ageEwan, averageAge);


const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 95;

const johnBmi = johnMass / johnHeight ** 2;
const markBmi = markMass / markHeight ** 2;
const markHigherBmi = markBmi > johnBmi;


console.log(johnBmi, markBmi, markHigherBmi);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log("string with \n\
multiple \n\
lines");

console.log(`string with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years.`)
};

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};

console.log(century);


//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)) + 18;

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old ");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1"


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 1;
if (money) {
    console.log("Dont spend it all")
} else {
    console.log("you should get a job")
};

let height = 0;
if (height) {
    console.log("yay height is defined")
} else {
    console.log("height is undefined")
};


const age = 18;
if (age === 18) console.log("You just became an adult");

const favourite = prompt("whats your favourite number");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log("23 is an amazing number")
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is an amazing number")
} else {
    console.log("This shouldnt appear")
}

if (favourite != 23) console.log("Why not 23?");


const hasDriversLicense = true; // A;
const hasGoodVision = true; // B;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("You can drive")
// } else {
//     console.log("Someone else should drive")
// };

const isTired = false; // C;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && hasGoodVision && !isTired) {
    console.log("You can drive")
} else {
    console.log("Someone else should drive")
};


const day = "Thursday";

switch (day) {
    case "Monday": // Day === Monday
        console.log("Plan course structure")
        console.log("Go to coding meet up")
        break;
    case "Tuesday":
        console.log("Prepare theory videos")
        break
    case "Wednesday":
    case "Thursday":
        console.log("write code examples");
        break;
    case "Friday":
        console.log("Record videos")
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend")
        break;
    default:
        console.log("Not a valid day");
};



const day = "Monday";

if (day == "Monday") {
    console.log("Plan course structure", "and go to coding meet up");
} else if (day == "Tuesday") {
    console.log("Prepare theory videos")
} else if (day == "Wednesday" || "Thursday") {
    console.log("write code examples");
} else if (day == "Thursday") {
    console.log("write code examples");
} else if (day == "Friday") {
    console.log("Record videos");
} else if (day == "Saturday" || "Sunday") {
    console.log("Enjoy the weekend")
} else {
    console.log("Not a valid day");
}



3 + 4;
1991;
true && true && !false;

if (23 > 10) {
    const str = "23 is bigger";
};

};

*/

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${drink}`)

