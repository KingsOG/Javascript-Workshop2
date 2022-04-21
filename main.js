//CONDITIONALS

//If...Else Statements

let sale = true;

    sale = false;

    if(sale) {
        console.log('Time to buy!');
    }else{
        console.log("Time to wait for a sale.");
};

//Comparison Operators

let timeNow = 1759;
if (timeNow < 1759){
    console.log("Guiness timeeee!");
}else{
    console.log("Watch time");
};

//Logical Operators

/* Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.

If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.*/

let mood = "sleepy";
let tirednessLevel = 6;

if(mood === "sleepy" && tirednessLevel > 8){
    console.log("Time to sleep");

}else {
    console.log("not bed time yet");
} // Prints not bed time yet

//Truthy and Falsy

let numberOfApples = 0;
if(numberOFApples){
    console.log("Lets eat apple");
}else{
    console.log("No apples left");
}; //Prints No apples left

let newTelly = "Its new";
if(newTelly){
    console.log("Its on");

}else{
    console.log("Its not on");
}; //Prints its on

let highChair;
if(highChair){
 console.log("It exists");
}else{
    console.log("its null");
}; //Prints its null

//Truthy and Falsy Assignment

let userName = "";
let defaultName;
if(userName){
    defaultName = userName;

}else{
    defaultName = "Stranger";
};

console.log(defaultName); //Prints Stranger

//In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment

let userName = "";
defaultName = userName || "Stranger";
console.log(defaultName); //prints Stranger

//however if userName is assigned a value of Chike

let userName = "Chike";
defaultName = userName || "Stranger";
console.log(defaultName); //Prints Chike

// Ternary Operator

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

//using Ternary
isLocked ? console.log("You will need a key to open the door.") : console.log("You will not need a key to open the door.");

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

//using ternary
isCorrect ? console.log("Correct!") : console.log ("Incorrect!");

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
};

//using ternary
favoritePhrase === "Love That!" ? console.log("I love that!") : console.log("I don't love that!");
