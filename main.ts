//oop
//object
//object is the instance of class
//class
//class is the blue print of object
class Car {
    name="toyota"
    model="corolla"
    year=2024
}
const car = new Car()
console.log(car);
//methods 1
type Dress = {
    color:string,
    size:string,
    price:number
}
class dress implements Dress{
    color="black"
    size="medium"
    price=1200
}
let mydress = new dress()
console.log(mydress);
//method 2
interface Pencils {
    color:string,
    length:number,
    brand:string
}
class pencils implements Pencils{
    color="red"
    length=6
    brand="HD pencils"
    displaydetals(){
   console.log(
     `My pencil color is ${this.color} it length is ${this.length} and brand name is ${this.brand}`
    )   }
}
let mypencil = new pencils()
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
class persons {
   public name="kiran"
   public qualification= "B.COM"
   private pin=1234
   protected salary=50000
}
let myperson = new persons()
console.log(myperson.name);
console.log(myperson.salary);
console.log(myperson.pin);
//Abstraction
//provide a common base class with implements functionalities




