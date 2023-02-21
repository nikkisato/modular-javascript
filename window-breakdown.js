//https://ultimatecourses.com/blog/what-function-window-document-undefined-iife-really-means
// function scope
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


// Questions for Chris
// IIFE??