"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Md Shakibul Islam";
const user1 = {
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
//! Destructuring and name alias
const { name: userName, age, college, address: { city, state, pincode }, } = user1;
console.log(userName);
//# sourceMappingURL=namealise.js.map