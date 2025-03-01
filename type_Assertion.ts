// Type Assertions

// let someValue:any="TypeScript"

// let strLength:string=(someValue as string).concat(" ","with Javascript.");

// console.log(strLength);

// console.log(strLength.length);

// const result=strLength.trim().split(/\s+/)
// console.log("Words:",result);
// console.log(result.length);


/* todo 👉  Substring: 
Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText. */

// let longText:string="This is Typescript progrm"

// function getFirstTenChars(sentence:string):string {
//     return sentence.substring(0,10)
// }
// const shortText=getFirstTenChars(longText)

// console.log(shortText);

/*todo 👉  String Comparison: 
Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
*/

// let str1:string="Hello Bhushan"
// let str2:string="Hello Bhushan!"

// const areEqual:boolean=str1===str2;
// console.log(areEqual);


/*todo 👉  String Template: 
Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."*/

let productName:string="Motorola G85 Mobile"
let price:number=130

console.log(`The Product ${productName} is priced at ${price} dollars `);



