// Section Function

// function message() {
//   try {
//     username();
//   } catch {
//     console.error("Need to provide a user object");
//   }
// }

(function (jsShop, window, document, undefined) {
  jsShop.travelPin ||
    (function () {
      const travelPin = {
        location: "Japan",
        date: "October",
      };
      console.log("Hello");
      const message = `The travel plans for this year is visiting: ${travelPin.location}, around ${travelPin.date} timeframe`;
      const container = document.getElementById("content-function");
      container.append(message);
    })();
})((window._jsShop = window.jsShop || {}), window, document);
