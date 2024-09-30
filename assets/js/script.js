"use strict"

// Task 1

const oddIndex = [
  "test",
  false,
  12345,
  undefined,
  "secret",
  NaN,
  true,
  0,
  100,
  null,
];

oddIndex.forEach(function (element, index) {
  if (index % 2 !== 0) {
    console.log(element);
  }
});

// Task 2

const dataArray = ["test", false, 2345, null];

const messageArray = dataArray.map(function (element, index) {
  return `Item with index ${index} has value ${element}`;
});

console.log(messageArray);

// Task 3

const users = [
  { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
  { firstName: "User", lastName: "Userenko", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
  { firstName: "Undefined", lastName: "Undefined", age: 99 },
  { firstName: "Null", lastName: "Nullochyk", gender: "male" },
];

const adultUsers = users.filter(function (user) {
  return user.age >= 18;
});

console.log(adultUsers);

// Task 4

const firstFemaleIndex = users.findIndex(function (user) {
  return user.gender === "female";
});
console.log(firstFemaleIndex);

// Bonus task

const allAdultMales = users.every(function (user) {
  return user.age >= 18 && user.gender === "male";
});

console.log(allAdultMales);
