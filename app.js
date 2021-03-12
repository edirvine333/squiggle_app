//  Script which calculates the days left in the WBDV program

const dayjs = require('dayjs')

const date1 = dayjs()
const date2 = dayjs("2021-04-23")

console.log(`Today's Date: ${date1}`)
console.log(`End of Program: ${date2}`)

let date3 = date2.diff(date1, "day", true);
console.log(`There are ${date3} days left in this program.  Good luck!!`)



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