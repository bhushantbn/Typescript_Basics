var varOne = "Hello Bhushan!!";
varOne = [1, 2, 3];
// console.log(varOne);
function getData(arg) {
    return arg;
}
var data = getData("Hello!!");
var bool = getData(true);
var intVar = getData(1);
var key = getData({ key: "Typescript!!" });
console.log(data);
console.log(bool);
// console.log(intVar);
// console.log(key);
// let x = 5;
// x = "Hello"; // No error, type changes from number to string
// console.log(x);
