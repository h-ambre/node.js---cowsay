const cowsay = require("cowsay");
const information = require("./information.js");
console.log(
  cowsay.say({
    text: `Hi, my name is ${information.name} and my campus is from ${information.campus}`,
    e: "oO",
    T: "U ",
  })
);
