//oop
//object
//object is the instance of class
//class
//class is the blue print of object
var Car = /** @class */ (function () {
    function Car() {
        this.name = "toyota";
        this.model = "corolla";
        this.year = 2024;
    }
    return Car;
}());
var car = new Car();
console.log(car);
var dress = /** @class */ (function () {
    function dress() {
        this.color = "black";
        this.size = "medium";
        this.price = 1200;
    }
    return dress;
}());
var mydress = new dress();
console.log(mydress);
var pencils = /** @class */ (function () {
    function pencils() {
        this.color = "red";
        this.length = 6;
        this.brand = "HD pencils";
    }
    pencils.prototype.displaydetals = function () {
        console.log("My pencil color is ".concat(this.color, " it length is ").concat(this.length, " and brand name is ").concat(this.brand));
    };
    return pencils;
}());
var mypencil = new pencils();
mypencil.displaydetals();
console.log(mypencil);
//Encapsulation
//protct data by restricting access to it
//Access modifier
//public
//accessible to outside the class
//protected
//accessible to the class and it child/drived class
//private
//not accessible outside the class
var persons = /** @class */ (function () {
    function persons() {
        this.name = "kiran";
        this.qualification = "B.COM";
        this.pin = 1234;
        this.salary = 50000;
    }
    return persons;
}());
var myperson = new persons();
console.log(myperson.name);
console.log(myperson.salary);
console.log(myperson.pin);
//Abstraction
//provide a common base class with implements functionalities
var students = /** @class */ (function () {
    function students() {
        this.name = "kiran";
        this.age = 20;
        this.class = 12;
        this.salary = 50000;
    }
    return students;
}());
console.log(students);
