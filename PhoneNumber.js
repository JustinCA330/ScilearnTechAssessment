/*
 * PhoneNumber.js
 * Tech Assessment Test for Scientific Learning Corporation
 *
 * Justin Abarquez
 * October 25, 2018
 */

var PhoneNumber = function(userInput){
    if (userInput.length === 11 && userInput.charAt(0) === "1") {
        this._phoneNum = userInput.substr(1);
    } else if (userInput.length === 10) {
        this._phoneNum = userInput;
    }
    //validation
    try {
        if (userInput.length < 10)
            throw " You have entered a number that is less than 10 digits. Please enter a ten digit number.";
        if (userInput.length === 11 && userInput.charAt(0) != "1")
            throw " You have entered an 11 digit number with a non-leading 1. Please enter a ten digit number.";
        if (userInput.length > 11)
            throw " You have entered an invalid phone number of more than 11 digits. Please enter a ten digit number.";
    } catch(err) {
        console.log("Error: " + err);
    }
}

PhoneNumber.prototype = {
    get number() {
        return " '" + this._phoneNum + "' ";
    },
    get areaCode() {
        return this._phoneNum.substring(0, 3);
    },
    get exchangeCode() {
        return this._phoneNum.substring(3, 6);
    },
    get lineNumber() {
        return this._phoneNum.substring(6, 10);
    },
    get pretty() {
        return "(" + this._phoneNum.substring(0, 3) + ") " + this._phoneNum.substring(3, 6) + "-" + this._phoneNum.substring(6, 10);
    },
}

function displayInfo(phoneNum){
        console.log("String representation: " + phoneNum.number);
        console.log("Area code: " + phoneNum.areaCode);
        console.log("Exchange code: " + phoneNum.exchangeCode);
        console.log("Line number: " + phoneNum.lineNumber);
        console.log("Pretty format: " + phoneNum.pretty);
}

/* Tests */
//start of program
console.log("Hello, welcome to Justin's US Phone Number Validator! (2018)\n\nThis is a tech assessment program for Scientific Learning Corporation. Intended for demonstration purposes only.");
console.log("--------------------------------");
//valid numbers
console.log("Valid Phone Numbers\n");
console.log("Phone number with exactly 10 digits (9492912415):");
var pn1 = new PhoneNumber("9492912415");
displayInfo(pn1);
console.log("\nPhone number with exactly 11 digits and a leading 1 (19492912415):");
var pn2 = new PhoneNumber("15552331030");
displayInfo(pn2);
//invalid numbers
console.log("\nInvalid Phone Numbers\n");
console.log("Phone number with less than 10 digits (492):");
var pn3 = new PhoneNumber("492");
console.log("\nPhone number with exactly 11 digits and a non-leading 1 (09492912415):");
var pn4 = new PhoneNumber("092912415");
console.log("\nPhone number with more than 11 digits (194929124150):");
var pn5 = new PhoneNumber("194929124150");
