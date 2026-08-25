const converterForm = document.querySelector("#converterForm");
const directionButton = document.querySelector("#directionButton");
const distanceInput = document.querySelector("#distanceInput");
const result = document.querySelector("#result");
const pageTitle = document.querySelector("#page-title");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const inputLabel = document.querySelector("#inputLabel");
const inputUnit = document.querySelector("#inputUnit");

let conversionDirection = "kmToMi";

directionButton.addEventListener("click", function () {
  if (conversionDirection === "kmToMi") {
    conversionDirection = "miToKm";
    pageTitle.textContent = "Miles to Kilometers";
    fromUnit.textContent = "Miles";
    toUnit.textContent = "Kilometers";
    inputLabel.textContent = "Distance in miles";
    inputUnit.textContent = "mi";
  } else {
    conversionDirection = "kmToMi";
    pageTitle.textContent = "Kilometers to Miles";
    fromUnit.textContent = "Kilometers";
    toUnit.textContent = "Miles";
    inputLabel.textContent = "Distance in kilometers";
    inputUnit.textContent = "km";
  }

  result.textContent = "Your result will appear here.";
  result.classList.remove("error");
});

converterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (distanceInput.value.trim() === "") {
    result.textContent = "Please enter a number.";
    result.classList.add("error");
    return;
  }

  const inputValue = Number(distanceInput.value);
  let convertedValue;
  let resultUnit;

  if (conversionDirection === "kmToMi") {
    convertedValue = inputValue * 0.621371;
    resultUnit = "miles";
  } else {
    convertedValue = inputValue * 1.60934;
    resultUnit = "kilometers";
  }

  result.classList.remove("error");
  result.innerHTML = `<strong>${convertedValue.toFixed(2)} ${resultUnit}</strong>`;
});
