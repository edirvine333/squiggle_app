//  Script which calculates the days left in the WBDV program

const dayjs = require('dayjs')
const readline = require("readline"); // Console ReadLine
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let date1 = null;
let date2 = null;

rl.question("Enter first date in YYYY-MM-DD, for today enter y: ", function(fDate) { // Date1
    
    if(fDate =="y" || fDate =="Y") date1=dayjs();
    else date1 = dayjs(fDate);
    
    rl.question("Enter second date in YYYY-MM-DD: ", function(sDate) {  // Date 2
        date2=dayjs(sDate);
        rl.close();
    });
});

rl.on("close", function() { // After all inputs
    console.log(`First date: ${date1}`)
    console.log(`Second date: ${date2}`)
    
    let date3 = date2.diff(date1, "day", true);
    let weeksLeft = date2.diff(date1,"week",false)
    let daysLeft = parseInt(date3-(7*weeksLeft));
    console.log(`There are ${weeksLeft} week(s) and ${daysLeft} day(s) left in this program.  Good luck!!`)
    process.exit(0);
});





//  ***************************************************  COMMENTS  **************************************************************
//
//  Line 3:  Declares a variable called dayjs and loads the module `dayjs`, making several methods(?) available
//  Line 5:  Declares a variable and makes it a function which returns today's date
//  Line 6:  Declares a variable and makes it a function which returns the date of the end of the program
//  Line 8:  console.logs today's date using the "date1" variable
//  Line 9   console.logs the date of the end of the program
//  Line 11: Uses the `dayjs` module to calculate the number of days between the two dates, assigning the answer to date3
//  Line 12:  console.logs the number of days left in the program
//
//  *****************************************************************************************************************************