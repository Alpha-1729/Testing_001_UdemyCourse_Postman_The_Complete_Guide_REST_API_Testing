// Passing a function as an argument to another function is called a callback.
const announceBreakfast = () => {
    console.log("Breakfast is ready!");
};

function makeBreakfast(callbackFunction) {
    console.log("Starting to make breakfast");
    callbackFunction(); // callback is invoked here
    console.log("Serving coffee");
}

// Passing a function reference (not invoking it) as an argument.
makeBreakfast(announceBreakfast);

// setTimeout — built-in function that accepts a callback and a delay in milliseconds.
setTimeout(announceBreakfast, 5000); // executes announceBreakfast after 5 seconds
console.log("Program ended"); // this runs immediately, before the setTimeout callback
