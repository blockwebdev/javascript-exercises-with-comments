// create a function with one argument called val
function test(val) {
    // use try and within it add a condition that..
    try {
        // checks whether val is a number using isNaN, if true..
        if (isNaN(val)) {
            // then throw an error that states that it is not
            // a number
            throw "Not a number!";
            // otherwise..
        } else {
            // output "got a number" to the console
            console.log("Got a number!");
        }
        // use catch to catch any errors..
    } catch (e) {
        // and output the error values to the console
        console.error(e);
        // add finally to run..
    } finally {
        // and output the value
        console.log("answer is: " + val);
    }
}
// request to the function with a number and string
console.log(test(5));
console.log(test("hello"));
