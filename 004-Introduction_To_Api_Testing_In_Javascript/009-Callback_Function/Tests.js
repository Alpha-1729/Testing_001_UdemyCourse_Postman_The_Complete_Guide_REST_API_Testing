// Passing function as an argument to another function.

const announceBreakfast = () => {
    console.log('Breakfast is ready!');
}

function makeBreakfast(callbackFunction) {
    console.log('Starting to make breakfast');
    callbackFunction();
    console.log('Serving coffee');
}

// Passing function to another function.
makeBreakfast(announceBreakfast);

// Using the inbuilt callback function.
setTimeout(announceBreakfast, 5000);  // This function will be called after 5 seconds.
console.log("Program ended");