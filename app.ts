let varOne: any ="Hello Bhushan!!";

varOne=[1,2,3];

// console.log(varOne);


function getData<T>(arg: T): T{
    return arg;

}
const data: string=getData("Hello!!");

const bool: boolean=getData(true);

const intVar: number=getData(1);

const key: {key:string}=getData({key:"Typescript!!"});

console.log(data);

console.log(bool);

// console.log(intVar);
// console.log(key);
// let x = 5;
// x = "Hello"; // No error, type changes from number to string

// console.log(x);




