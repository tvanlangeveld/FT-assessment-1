///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

for(let i = 0; i < fujiAcres.length; i++){
    totalAcres = fujiAcres[i] + totalAcres;
    totalAcres = galaAcres[i] + totalAcres;
    totalAcres = pinkAcres[i] + totalAcres;
}

console.log(totalAcres)

// To get this awnser I use a for loop becauase I needed to read over the data in all the arrays to get my solution. I wrote the code like this with fujiAcres.length becuase it would be impossible to add an additional day of the week. However if it were the case that would happen the code would need be written in seperate for loops to insure we were adding the proper amount of days.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


let averageDailyAcres = totalAcres / fujiAcres.length;



console.log(averageDailyAcres)


// This was pretty simple math. I made my new var averageDailyAcres = sum of vaules (total acres of land) and divided by fujiacres.length which is the number of values (days).

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


while(acresLeft >= 0){
  acresLeft = acresLeft - averageDailyAcres;
   days = days + 1;
}
console.log(days)

// I I used a while loop to find how many days of work it would take to gather all the apples. Every time the loop activated it would change the value of acresLeft by minusing averedayacres and then it would at 1 day to the day var and then restart until acresleft was equal to zero

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []


for(let i = 0; i < fujiAcres.length; i++){
  fujiTons.push(fujiAcres[i] * 6.5)
  galaTons.push(galaAcres[i] * 6.5)
  pinkTons.push(pinkAcres[i] * 6.5)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)



// created a for loop to so that I could get the total of tons collected each day. 

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let totalFujiTons = 0;
let totalGalaTons = 0;
let totalPinkTons = 0;


for(let i = 0; i < fujiTons.length; i++){
    totalFujiTons = fujiTons[i] + totalFujiTons;
    totalGalaTons = galaTons [i] + totalGalaTons;
    totalPinkTons = pinkTons [i] + totalPinkTons;
}


let fujiPounds = totalFujiTons * 2000;
let galaPounds = totalGalaTons * 2000;
let pinkPounds = totalPinkTons * 2000;



// console.log(totalFujiTons)
// console.log(totalGalaTons)
// console.log(totalPinkTons)



console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

console.log('___________________')


// Used a for loop to get the total of tons per style of apple and the saved that value in its own new variable and then assigned the pounds variable the value of fuji total * 2000 as seen above.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;


console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)


console.log(`We made ${fujiProfit} dollars in profit`)
console.log(`We made ${galaProfit} dollars in profit`)
console.log(`We made ${pinkProfit} dollars in profit`)

// I used the total pounds Variable * the price Variable to get the total profit.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE


let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(totalProfit)

console.log(`We made ${totalProfit} in total profit!!!`)


// I added all of the profits together and assigned it to the new LET totalProfit.