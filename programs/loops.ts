// using for loop with replace word

/*
const fruits:string[]=["apple","banana","WaterMelon"]

for(let i =0; i<fruits.length;i++){
    if(fruits[i]==="banana"){
       fruits[i]="grapes"
    }
    console.log(fruits[i]);
}
*/

// using for loop with map method with replace word

 
/*
const fruits:string[]=["apple","banana","WaterMelon"]
 
const fruitsMap=fruits.map(fruit => fruit ==='banana' ? 'pineapple': fruit)
    
for (let index = 0; index < fruitsMap.length; index++) {
    console.log(fruitsMap[index]);
    
}
*/

// sum of the numbers

function sum(num:number) {
    let sum=0;
    for(let i=num;i>=1;i--){
        sum+=i;
    }
    return sum;
    
}
console.log(sum(3));
