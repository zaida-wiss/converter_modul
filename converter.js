import {convert as convertWeight } from "./convertWeight.mjs";
import {convert as convertLength } from "./convertLength.mjs";
import {convert as convertTemperature } from "./convertTemperature.mjs";

const inputLength = document.getElementById("inputLength");
const inputTemperature = document.getElementById("inputTemperature");
const inputWeight = document.getElementById("inputWeight");
const outputLength = document.getElementById("outputLength");
const outputTemperature = document.getElementById("outputTemperature");
const outputWeight = document.getElementById("outputWeight");

inputLength.addEventListener("change", () => {
    const value =Number(inputLength.value);
    const result = convertLength(value, "cm", "m");
    outputLength.textContent = `${value} cm = ${result} m`;
    console.log(result);
});

inputTemperature.addEventListener("change", () => {
    const value =Number(inputTemperature.value);
    const result =convertTemperature(value, "c", "f");
    outputTemperature.textContent = `${value} °c = ${result} °F`;
    console.log(result);
});

inputWeight.addEventListener("change", () => {
    const value =Number(inputWeight.value);
    const result = convertWeight(value, "kg", "g");
    outputWeight.textContent = `${value} kg = ${result} g`;
    console.log(result);
});