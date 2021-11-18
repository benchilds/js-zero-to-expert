/*const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 95;

const johnBmi = johnMass / johnHeight ** 2;
const markBmi = markMass / markHeight ** 2;
const markHigherBmi = markBmi > johnBmi;


console.log(johnBmi, markBmi, markHigherBmi);

if (markBmi > johnBmi) {
    console.log(`Marks BMI(${markBmi}) is higher than Johns(${johnBmi})`)
} else {
    console.log(`Marks BMI(${markBmi}) is lower than Johns(${johnBmi})`)
};


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition, and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

const averageScoreDolphins = (97 + 112 + 81) / 3;
const averageScoreKoalas = (109 + 95 + 86) / 3;
const bothTeams = averageScoreDolphins && averageScoreKoalas;
console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && (averageScoreKoalas, averageScoreDolphins >= 100)) {
    console.log("Dolphins are the winners!")
} else if (averageScoreKoalas > averageScoreDolphins) {
    console.log("Koalas are the winners!")
} else if (averageScoreKoalas == averageScoreDolphins && bothTeams >= 100) {
    console.log("This game is a draw!")
} else {
    console.log("No-one wins")
};
*/

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

// const billValue = 40;
// const tip = billValue <= 300 >= 50 ? billValue * 0.15 : billValue * 0.2;
// console.log(`The bill is equal to ${billValue}, Including a tip of ${tip}, so the total bill is ${billValue + tip}`);


// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉 GOOD LUCK 😀


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAv = calcAverage(85, 54, 41);
const koalasAv = calcAverage(23, 34, 27);
console.log(dolphinsAv, koalasAv);

const checkWinner = function (koalasAv, dolphinsAv) {
    const koalaWin = `Koalas win ${koalasAv} to ${dolphinsAv}`;
    const dolphinWin = `Dolphins win ${dolphinsAv} to ${koalasAv}`;
    if (koalasAv > dolphinsAv) {
        return koalaWin;
    } else if (dolphinsAv > koalasAv) {
        return dolphinWin;
    } else if (dolphinsAv == koalasAv) {
        return "This game is a draw";
    }
}

console.log(checkWinner(koalasAv, dolphinsAv));








    // if (dolphinsScore >= 2 * koalasScore) {
    //     return "Dolphins are the winners!"
    // } else if (koalasScore >= 2 * dolphinsScore) {
    //     return "Koalas are the winners!"
    // } else {
    //     return "Its a draw :("
    // }


