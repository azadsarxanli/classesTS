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
