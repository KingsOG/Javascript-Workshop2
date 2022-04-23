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

// Else If Statements

let season = "summer";

if (season === "fall"){
    console.log("Leaves are falling");
}else if(season === "winter"){
    console.log("Its snowing!");
}else if (season === "summer"){
    console.log ("Suns out...Guns out!")
}
else {
    console.log("Season invalid")
}//Prints Suns out...Guns out!

//.The switch keyword

//Let’s write a switch statement to decide what medal to award an athlete.

let athleteFinalPosition = "first place";

switch(anthleteFinalPosition){
    case "third place":
        console.log("You get the bronze medal!");
    break;
    case "second place":
        console.log("You get the silver medal!");
    break;
    case "first place":
        console.log("You get the gold medal!");
    break;
    default:
        console.log("No medal awarded."); 
    break;       

} //Prints You get the gold medal!

// Magic Eight Ball Project Build

/*
In the first line of the program, define a variable called userName that is set to an empty string. 

Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.

Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!

We need to generate a random number between 0 and 7.

Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.

We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:

'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'
If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!
Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
*/

let userName = "";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

let userQuestion = "";
if(userQuestion){
    console.log(`${userName} asked ${userQuestion}`);

};

let randomNumber = Math.floor ((Math.random) * 8);

let eightBall = "";

//using the switch keyword

switch(randomNumber){
    case 0:
        eightBall = "It is certain";
    break;
    case 1:
        eightBall = "It is decidedly so";
    break;
    case 2:
        eightBall = "Reply hazy try again";
    break;
    case 3:
        eightBall = "Cannot predict now";
    break;
    case 4:
        eightBall = "Do not count on it";
    break;
    case 5:
        eightBall = "My sources say no";
    break;
    case 6:
        eightBall = "Outlook not so good";
    break;
    case 7:
        eightBall = "Signs point to yes";
    break;
}

console.log("Magic Eight Ball says: " + eightBall);

//using else if

if(randomNumber === 0){
    eightBall = "It is certain";
}else if(randomNumber === 1){
    eightBall = "It is decidedly so";
}else if(randomNumber === 2){
    eightBall = "Reply hazy try again";
}else if(randomNumber === 3){
    eightBall = "Cannot predict now";
}else if(randomNumber === 4){
    eightBall = "Do not count on it";
}else if(randomNumber === 5){
    eightBall = "My sources say no";
}else if(randomNumber === 6){
    eightBall = "Outlook not so good";
}else if(randomNumber === 7){
    eightBall = "Signs point to yes";
}else {
    eightBall = "Present arm";
};

console.log("Magic Eight Ball says: " + eightBall);


// RACE DAY APP
/* You have been hired to write a program that will register runners for the race and give them instructions on race day.
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

*/

let raceNumber = Math.floor (Math.random() * 1000);
let earlyRegistrant = true;
let runnersAge = 15;
if(runnersAge >= 18 && earlyRegistrant === true){
  raceNumber += 1000;
};
if(runnersAge >= 18 && earlyRegistrant === true){
  console.log(`You are number ${raceNumber}. Early Adults run at 9:30am`);

}else if(runnersAge >= 18 && earlyRegistrant === false){
  console.log(`You are number ${raceNumber}. Late adults run at 11:00am`);
}else if(runnersAge < 18){
  console.log("Youth registrants run at 12:30 pm regardless of registration time.");
}else{
  console.log("See the registration desk.")
} // Prints Youth registrants run at 