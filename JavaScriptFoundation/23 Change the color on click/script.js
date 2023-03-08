// Define an array of colors
const colors = ["#FF5733", "#DAF7A6", "#FFC300", "#C70039", "#900C3F", "#3498DB", "#2ECC71"];

// Get a reference to the button
const colorButton = document.getElementById("color-button");

// Add a click event listener to the button
colorButton.addEventListener("click", function() {
  // Get a random color from the array using Math.random() method
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Set the background color of the body element to the random color
  document.body.style.backgroundColor = randomColor;
});
