// Section Function
// But - the function in the second js file needs information from the function
// in the first js file - how can this be done
// Can you invoke the function from the second file in the first file?

import { username } from "./app.js";

export function message() {
  try {
    username();
  } catch {
    console.error("Need to provide a user object");
  }
}

// 3
message();

// --------------------------------
//   try {
//   username();
//   } catch {
//     console.error("Need to provide a message");
//   }
// --------------------------------
// ask chris if this is okay
// if (username) {
//     username()
//   } else {
//     console.error("need to provide a user object")
//   }
