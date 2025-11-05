import {convert as convertWeight } from "./convertWeight.mjs";
import {convert as convertLength } from "./convertLength.mjs";
import {convert as convertTemperature } from "./convertTemperature.mjs";

const inputLength = document.getElementById("inputLength");
const inputTemperature = document.getElementById("inputTemperature");
const inputWeight = document.getElementById("inputWeight");

inputWeight.addEventListener("change", () => {
    const value =Number(inputWeight.value);
    console.log(convertWeight(value, "kg", "g"));
});

inputLength.addEventListener("change", () => {
    const value =Number(inputLength.value);
    console.log(convertLength(value, "cm", "m"));
});

inputTemperature.addEventListener("change", () => {
    const value =Number(inputTemperature.value);
    console.log(convertTemperature(value, "c", "f"));
});