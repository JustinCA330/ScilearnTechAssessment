/*
 * Meetup.js
 * Tech Assessment Test for Scientific Learning Corporation
 *
 * Justin Abarquez
 * October 26, 2018
 */

function meetupDay(year, month, day, sched){
    var date = {
        year: year,
        month: month,
        day: day,
        sched: sched
    };
    return date;
}

function meetupFormat(year, month, day, sched){
    if (sched === "first" || sched === "third" || sched === "last") {
        console.log(month + "-" + year + ", the " + sched + " " + day);
    } else if (sched === "teenth") {
        console.log(month + "-" + year + ", the " + day.substr(0, day.length - 3) + sched);
    } else {
        console.log("Please enter valid arguments.");
    }
}
console.log("Hello, welcome to Justin's Meetup Program! (2018)\n\nThis is a tech assessment program for Scientific Learning Corporation. Intended for demonstration purposes only.");
console.log("--------------------------------\n");
console.log("Here is a meetup returned as an object:");
console.log(meetupDay(2018, 10, "Tuesday", "last"));
console.log("\nHere are meetups represented in a nice format:");
meetupFormat(2018, 10, "Tuesday", "last");
meetupFormat(2018, 9, "Thursday", "first");
meetupFormat(2018, 11, "Saturday", "teenth");
meetupFormat(2020, 12, "Wednesday", "teenth");
console.log("\nExample of an error:");
meetupFormat(2018, 13, "Monday", "teenthh");