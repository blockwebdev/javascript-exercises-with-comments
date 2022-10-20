// select each of the three page elements and assign the element objects 
// as variables
const output = document.getElementById("output");
const findValue = document.getElementById("sText");
const replaceValue = document.getElementById("rText");

// add an event listener to the button to invoke a function when clicked
document.querySelector("button").addEventListener("click", lookUp);

// create a function named lookup that will find and replace the text in the
// output element. 
function lookUp() {
    // assign the output elements text content to a variable named 's'
    const s = output.textContent;
    // assign the value of the input being replaced to a variable named 'rt'
    const rt = replaceValue.value;
    // create a new regex with the value of the first input field, which will 
    // allow to replace the text
    const re = new RegExp(findValue.value, "gi");
    // check for a match with the match method. wrap this with a condition
    // that will execute a block of code if matches are found. If the match
    // is found..
    if (s.match(re)) {
        // use replace() to set the new value
        let newValue = s.replace(re, rt);
        // update output area with the newly created and updated text output
        output.textContent = newValue;
    }
}