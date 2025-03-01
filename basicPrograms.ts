// Example 1: Maximum and Minimum Limits of Numbers in TypeScript

// console.log("Number Properties in TypeScript:"); 


// console.log("Maximum value of a number variable has :",Number.MAX_VALUE);
// console.log("Minimum value of a number variable has :",Number.MIN_VALUE);
// console.log("The least value of a number variable has:" ,Number.NEGATIVE_INFINITY);
// console.log("The least value of a number variable has:" ,Number.POSITIVE_INFINITY);

// Example 2: NaN Value

let day:number=0;

if(day<=0 || day>7){
    day=Number.NaN;
    console.log("day is:",day);
}else
    console.log("Value accepted..");
    