// create a function without any parameters
function argumentLesson() {
    // set up a variable called lastOne with a blank value
    let lastOne = "";
    // create a loop to iterate through the length of the
    // arguments object. This will allow an iteration of each 
    // item of the arguments in the function
    for (let i = 0; i < arguments.length; i++) { 
        // as you loop through the arguments, set lastOne to 
        // the current value of the argument using the index
        // of i to return the argument value. the argument
        // will have an index value that can be used to reference
        // the value as you iterate through the arguments object
        lastOne = arguments[i];
    }
    // return the value of lastOne, which should only return the
    // last argument value as the response
    return lastOne;
     
}
// output the response from the function, pass a number of
// arguments into the function, and console log the response
// result. you should see only the last item in the list
console.log(argumentLesson("a", "b", "c"));

// if you want to see each item, you can output them separately
// to the console as you look through the values..

/* 

EXAMPLE: 

for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    lastOne = arguments[i];
}
return lastOne;


-or construct an array that can then be returned, adding each 
-one as you go through the arguments

EXAMPLE:

let lastOne = [];   --   OR  let lastOne = "";
for (let i = 0; i < arguments.length; i++) {
    lastOne.push(arguments[i]);   --  OR  lastOne += arguments[i];
}
return lastOne;

*/