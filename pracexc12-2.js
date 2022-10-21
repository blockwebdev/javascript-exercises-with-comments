// select the output, input and button elements from the page as 
// javascript objects
const output = document.querySelector(".output");
const input = document.querySelector("input");
const button = document.querySelector("button");

// create the regex for testing
const validEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)\w/gi;

// add an event listener to the button to run a block of code when clicked, 
button.addEventListener("click", (e) => {
    // that will get the current value in the input field
    const currentVal = input.value;
    // add a test with the string value from the input field
    // and the expression for email format..
    const result = validEmail.test(currentVal);
    // create a blank response value that will populate the 
    // output div element contents
    let response = "";

    // if the test result is false..
    if (!result) {
        // ..update the response output to say "Invalid Email"..
        response = "Invalid Email";
        // ..and change the output color to red
        output.style.color = "red";
        // otherwise if the condition of the test returns true..
    } else {
        // add a response that confirms the email format is correct..
        response = "Valid Email";
        // and change the text color of the output to green
        output.style.color = "green";
    }
    // clear the input text area
    input.value = "";
    // output the response value into the output element
    output.textContent = response;
});
