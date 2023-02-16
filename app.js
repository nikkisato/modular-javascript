// First Function

// uncomment for #3 to work
// import { message } from "./function.js";

const user = {
  name: "Nikki",
  age: 25,
};

export function username() {
  console.log(`The username should be: ${user.name}, and ${user.name} should be ${user.age}`);
  const message = `The username should be: ${user.name}, and ${user.name} should be ${user.age}`;
  const container = document.getElementById("content");
  container.append(message);
}

//4
// message();
