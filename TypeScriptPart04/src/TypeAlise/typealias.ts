import type _interface = require("../interface/interface");
import type type = require("../types/type");

const user: type.TUser = {
  name: "John",
  age: 30,
  college: "MIT",
  address: {
    city: "New York",
    state: "NY",
    pincode: 10001,
  },
  isMarried: false,
};

const user1: _interface.IUser = {
  name: "John",
  age: 30,
  college: "MIT",
  address: {
    city: "New York",
    state: "NY",
    pincode: 10001,
  },
  isMarried: false,
};

// Destructuring
// name alise
const {
  name,
  age,
  college,
  address: { city, state, pincode },
} = user1;

console.log(city);
console.log(state);
console.log(pincode);
