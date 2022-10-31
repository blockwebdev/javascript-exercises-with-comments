// output the value of document.cookie, it should be blank
console.log(document.cookie);
// add two console log messages using the function to read both
// cookies you have set earlier. output the values of the cookies
// in the console
console.log(rCookie("test1"));
console.log(rCookie("test"));
// create a function to create a test cookie with a value and
// expiry set after a number of days, create a second cookie 
// the same way, and when you refresh the page, you should see
// at least two cookies in the console
cCookie("test1", "new Cookie", 30);
// try deleting a cookie by name
dCookie("test2");
// create a function that will take the parameters for cookieName,
// cookieValue, and the number of days you want to set the cookie
function cCookie(cName, value, days) {
    // check if days is valid, and within the block of valid code
    if (days) {
        // get the current date
        const d = new Date();
        // set a setTime value for the cookie to expire in 
        // milliseconds by multiplying the days into milliseconds
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        // change the date object of milliseconds until the
        // cookie expires to a UTC string value
        let e = "; expires=" + d.toUTCString();
        // set document.cookie to cookieName = cookieValue, plus
        // add the expiry details and lastly specify path=/
        document.cookie = cName + "=" + value + e + "; path=/";
    }
}
// create a second function to read a cookie value
function rCookie(cName) {
    // set the value as false and then..
    let cookieValue = false;
    // create an array of the cookies split by semi-colons
    let arr = document.cookie.split("; ");
    // loop through all the cookies and..
    arr.forEach(str => {
        // split again where the equal signs are. this will give
        // the first item with index 0 as the name of the cookie.
        const cookie = str.split("=");
        // add a condition to check if the name is equal to the 
        // name that was requested in the function parameters. if
        // it matches..
        if (cookie[0] == cName) {
            // assign the value of the second item in the index
            // which will be the value of the cookie with the 
            // selected name
            cookieValue = cookie[1];
        }
    });
    // return cookieValue in the function
    return cookieValue;
}
// to delete a cookie, you need to set a date prior to the 
// current date. 
function dCookie(cName) {
    // you can create a cookie with a -1 date and send the cookie
    // with its selected name to be deleted by invoking the cookie
    // creation function
    cCookie(cName, "", -1);
}
