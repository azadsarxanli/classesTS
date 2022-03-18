var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function () {
    function Home(room, floor, window) {
        this.roomNumber = room;
        this.floor = floor;
        this.windowNumber = window;
    }
    Home.prototype.eatMeal = function () {
        console.log("you ate your meal at the" + this.roomNumber);
    };
    return Home;
}());
var home = new Home(3, 6, 2);
home.eatMeal();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log("persone has been saved");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("Customer sold something");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.paySalary = function () {
        console.log("You payed salary ");
    };
    return Employee;
}(Person));
var customer = new Customer();
customer.sell();
