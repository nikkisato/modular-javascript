// First Function
// const user = {
//   name: "Nikki",
//   age: 25,
// };

// export function username() {
//   console.log(`The username should be: ${user.name}, and ${user.name} should be ${user.age}`);
//   const message = `The username should be: ${user.name}, and ${user.name} should be ${user.age}`;
//   const container = document.getElementById("content");
//   container.append(message);
// }

(function (jsShop, window, document, undefined) {
  jsShop.user ||
    (function () {
      const user = {
        name: "Nikki",
        age: 25,
      };

      const message = `The username should be: ${user.name}, and ${user.name} should be ${user.age}`;
      const container = document.getElementById("content-app");
      container.append(message);
    })();
})((window._jsShop = window._jsShop || {}), window, document);
