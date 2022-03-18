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
