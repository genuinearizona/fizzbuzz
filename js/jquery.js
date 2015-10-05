//loop variable equal to 1; i less than and equal to 100; i incrementing by 1 but stopping at 100. start of statement after curly brace
for (var i=1; i<=100; i++) {

// if number 1 thru 100 is divisable by 15 and stricly equal to no remainder
if (i%15 === 0)

// then log fizzbuzz
console.log ("fizzbuzz")

// or if number 1 thru 100 is divisable by 3 then and sticly equal to no remainder
else if (i%3 === 0)

// then log fizz
console.log ("fizz")

// or if (number 1 thru 100 is divisable by 5 and sticly equal to no remainder
else if (i%5 ===0)

// then log buzz
console.log ("buzz")

// then log the integer
else 
console.log (i);
// end of statement with curly brace
}
