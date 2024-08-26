//QUESTION 1
console.log('Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93');
// A) Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log ("Ages" ,ages);

let minusAges = ages[ages.length-1] - ages[0];
console.log("Minus ages :", minusAges);


// B) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
 ages.push(15);
 console.log("Added age to the array :",ages);

let addedAges = ages[ages.length-1] - ages[0];
console.log("added age minus :", addedAges);


// C) Use a loop to iterate through the array and calculate the average age.

let sumOfAges = 0;

for(let i = 0; i <ages.length; i++){
    sumOfAges += ages[i]
    console.log("index :",i, "sumOfAges :" , sumOfAges);
}

console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log('Average', average);







//QUESTION 2
console.log(" Question 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// A) Use a loop to iterate through the array and calculate the average number of letters per name.

let totalChars = 0; 

for (let i =0; i<names.length; i++) {
    totalChars += names[i].length
    console.log("Index :",i, "Name:", name[i], "totalChar:" , totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names : ", averageName);


// B) Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = " ";

for (let i = 0; i < names.length ; i++){
    concatNames = concatNames.concat(names[i] + " ");
    console.log("Names concatenated", concatNames);
}


//QUESTION 3 

console.log(" Question 3. How do you access the last element of any array?");

console.log('You access the last element of the array by using the length property. The index of the last element is length - 1');

//QUESTION 4 
console.log(" Question 4. How do you access the first element of any array?");

console.log('To access the first element of an array you use 0 because arrays are zero based.');


//QUESTION 5
console.log(" Question  5. Create a new array called nameLengths. Write a loop to iterate over the previously ");
//-created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for (let i = 0 ; i< names.length; i++){
    nameLengths.push(names[i].length)
    console.log("Name lengths array:", nameLengths);
}

//QUESTION 6 
console.log(" Question 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

let charsTotal = 0;
for (let i = 0 ; i < nameLengths.length; i++){
    charsTotal += nameLengths[i]
    console.log('CharsTotal', charsTotal);
}

//QUESTION 7 
console.log(" Question 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.");

function concatWords (word , n ) {
        console.log("Word Par:" , word , "n Par:", n);
        let concat = word.repeat(n);
        console.log(concat);
}
concatWords("Hello", 3);

//QUESTION 8

console.log(" Question 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

function fullName (firstName , lastName ){
    let fullName = firstName + " " + lastName
    console.log(fullName);
}
fullName("Adriana" , "Torres");

//QUESTION 9
console.log(" Question  9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

let numbers1 = [100, 150, 200, 250]
let numbers2 = [ 2 , 4 ,6 ,8]

function sumNumbersArray(array) {
    let total = 0;

    for(let i=0; i < array.length; i++){
        total += array[i];
        console.log("Total :", total);
    }
    if (total > 100 ) {
        console.log("Total : ", total, true);
        return true
    }else {
        console.log("Total :",total , false );
        return false
    }
}

sumNumbersArray(numbers2);

//QUESTION 10
console.log(" Question 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function calculateNumbersAverage(array) {
    let total = 0;

    for (let i =0; i < array.length; i++ ){
        total += array[i]
        console.log("Calculate Function, total: ", total);
    }

    let average = total / array.length;
    console.log("Average of numbers:", average );
    return average; 
}
calculateNumbersAverage(numbers1);

//QUESTION 11
console.log(" Question 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

let numbers3 = [100,100,100];
let numbers4 = [100,100,99];

function twoAverages(array1, array2){
    console.log("Parameters:", array1,array2);
    let total1 = 0;
    let total2 = 0;
    for( const number of array1) {
        total1 += number;
        console.log("Current number loop 1 : ", number, "Total1 : ", total1);
    }

    for( const number of array2) {
        total2 += number;
        console.log("Current number loop 2:", number , "Total2", total2);

    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Average", average1 , average2);

    if( average1 > average2) {
        console.log(true);
        return true 
    } else if (average1 < average2) {
        console.log(false);
        return false;
    }else {
        console.log("Numbers are equal ");
    }
}
twoAverages(numbers3, numbers4);

//QUESTION 12
console.log(" Question  12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(isHotOutside,moneyInPocket){
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy as drink?", buyDrink);
    return buyDrink;

}

willBuyDrink( true,11);

//QUESTION 13
console.log(" Question  13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");

