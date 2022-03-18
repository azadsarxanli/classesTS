class Home {
  roomNumber: number;
  windowNumber: number;
  floor: number;
  constructor(room: number, floor: number, window: number) {
    this.roomNumber = room;
    this.floor = floor;
    this.windowNumber = window;
  }
  eatMeal() {
    console.log("you ate your meal at the" + this.roomNumber);
  }
}
let home = new Home(3, 6, 2);
home.eatMeal();

class Person {
  save() {
    console.log("persone has been saved");
  }
}
class Customer extends Person {
  sell() {
    console.log("Customer sold something");
  }
}
class Employee extends Person {
  paySalary() {
    console.log("You payed salary ");
  }
}
let customer = new Customer();
customer.sell();
