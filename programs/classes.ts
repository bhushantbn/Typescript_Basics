// classes

class Car {
    brand: string | undefined ;
    constructor(brand: string) {
        this.brand = brand;
    }

    drive() {
        console.log(`${this.brand} is driving!`);
    }
}

let myCar = new Car("11");
myCar.drive();
