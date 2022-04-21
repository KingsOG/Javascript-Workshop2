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
