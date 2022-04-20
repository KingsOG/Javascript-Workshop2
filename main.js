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
