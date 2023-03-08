function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}
let celsiusTemp = 20;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(fahrenheitTemp); // Output: 68
