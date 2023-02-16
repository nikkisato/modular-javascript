// Section Function
// But - the function in the second js file needs information from the function
// in the first js file - how can this be done
// Can you invoke the function from the second file in the first file?

import { username } from "./app.js";

export function message() {
  try {
    username();
  } catch {
    console.error("Need to provide a message");
  }
}

message();
