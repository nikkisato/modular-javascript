const camelCase = require("lodash").camelCase;

import "./style.scss";

import username from "./app";
import { message } from "./function";

// Not seeing anything from here
console.log(camelCase("Hello World"));
console.log(camelCase("Bye World"));

username();
message();
