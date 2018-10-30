/*
 * Bob.js
 * Tech Assessment Test for Scientific Learning Corporation
 *
 * Justin Abarquez
 * October 25, 2018
 */

var bob = (function () {

    var response1 = "Sure.";
    var response2 = "Woah, chill out!";
    var response3 = "Fine. Be that way!";
    var response4  = "Whatever.";
    
    function hey(userWords){
        try {
            if (userWords.substr(-1) === "?")
                throw response1;
            if (userWords === userWords.toUpperCase() && userWords.length !== 0)
                throw response2;
            if (userWords === "")
                throw response3;
            else
                throw response4;
        }catch(res) {
            console.log("Bob says, '" + res + "'");
        }
    }

    console.log("You approach Bob, a lackadaisical teenager...");
    console.log("---------------------------------------------\n");
    console.log("You ask how he's doing.");
    hey("Hey Bob, how are ya?");

    console.log("\nYou ecstatically greet him 'HAPPY BIRTHDAY, BOB!'");
    hey("HAPPY BIRTHDAY, BOB!");

    console.log("\nYou say nothing.");
    hey("");

    console.log("\nYou try to talk about the weather.");
    hey("This weather is always changing.");

}());