// First Function

import { message } from "./function.js";

export let user = {
  name: "Nikki",
  age: 25,
};

export function username() {
  console.log(`The username should be: ${user.name}, and ${user.name} should be ${user.age}`);
  const message = `The username should be: ${user.name}, and ${user.name} should be ${user.age}`;
  const container = document.getElementById("content");
  container.append(message);
}

// message();
