// classes
var Car = /** @class */ (function () {
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
        drive() {
            console.log("".concat(this.brand, " is driving!"));
        }
    }
    return Car;
}());
var myCar = new Car("11");
myCar.drive();
