/*
Coding Challenge #1

Mark and John are trying to compare their BMI(Body Mass Index), which is 
calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:

1. Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 
m tall.
2. Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76m tall.
*/
// Test Data 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

/*
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
*/

//---------- TEST DATA 1 ----------
console.log("-------------- DATA 1 -------------- ");

//Mark's BMI
const markBMi = (markMass / markHeight ** 2);

console.log(`Mark's BMI is ${markBMi.toFixed(1)}`);

//John's BMI 
const johnBMI = (johnMass / johnHeight ** 2);
console.log(`John's BMi is ${johnBMI.toFixed(1)}`);

const markHigherBMI = markBMi > johnBMI;
console.log(`Is Mark's BMI higher that John's? ${markHigherBMI}`);


//---------- TEST DATA 2 ----------
console.log("-------------- DATA 2 -------------- ");

// Test Data 2
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

/*
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
*/

const markBMi2 = markMass2 / markHeight2 ** 2;
console.log(`Mark2's BMI is ${markBMi2.toFixed(1)}`);

const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(`John2's BMI is ${johnBMI2.toFixed(1)}`);

const higherBMI = markBMi2 > johnBMI2;
console.log(`Is Mark's BMI higher than John's? ${higherBMI}`);


















