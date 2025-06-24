/*
Directions:

Use the map() method(opens in a new tab) to take the array of bill amounts shown below,
 and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
Print out the new totals array using console.log.

TIP: Check out the toFixed() method for numbers to help with rounding(opens in a new tab) 
the values to a maximum of 2 decimal places. Note, that the method returns a string to maintain the 
"fixed" format of the number. So, 
if you want to convert the string back to a number, you can cast it or convert it back to a number:
*/


const bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
 let totals = bills.map((bill)=>{
   bill *= 1.15
   return Number(bill.toFixed(2))
   
    
})
console.log(totals)