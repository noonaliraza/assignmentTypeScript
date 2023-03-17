"use strict";
let favoriteFruits = ["grapefruit", "orange", "lemon"];
let lFru = favoriteFruits.push("p-nut", "Mango", "blueberry");
let srturn = favoriteFruits.splice(1, 0, "ali", "raza", "noon");
console.log(favoriteFruits);
//console.log(srturn)
let findVal = favoriteFruits.find(function (x) { return x == "raza"; });
console.log(findVal);
