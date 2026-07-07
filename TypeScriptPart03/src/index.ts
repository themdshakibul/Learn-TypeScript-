type TMyFunc = (x: number, y: number) => number;

const myFunc: TMyFunc = (x, y) => {
  return x + y;
};

// Method Syntax
const car = {
  barnd: "bmw",
  model: "x5",
  year: 2022,
  printCar: function (price: number) {
    console.log(`${this.barnd}${this.model}${this.year} and price ${price}`);
  },
};
car.printCar(1000);

// Spled Oprator
const color: String[] = ["red", "green", "blue"];

const colors: String[] = ["green", "yellow"];

const newColors = [...color, ...colors];
console.log(newColors);

// Rest Oprator

const user1 = {
  name: "Md Shakibul Islam",
  age: 29,
};

const newUser = {
  ...user1,
  isMarid: true,
};

type TUser = (user1: string, user2: string, user3: string) => void;

const usrers = (...urersArr: string[]) => {
  console.log(urersArr);
};

usrers(
  "Md Shakibul Islam",
  "Md Shakibul Islam",
  "Md Shakibul Islam",
  "Md Rokibul Islam",
);
