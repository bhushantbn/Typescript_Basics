// Generics

function identity<T>(arg:T):T {
    return arg;
}
console.log(identity<String>("Hello"));
console.log(identity<number>(100));

