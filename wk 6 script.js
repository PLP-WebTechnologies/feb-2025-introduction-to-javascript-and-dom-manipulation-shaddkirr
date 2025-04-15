// Function to change the text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
  document.getElementById("dynamicText").textContent = "The text has been changed!";
});

// Function to change the text color dynamically
document.getElementById("changeColorButton").addEventListener("click", function() {
  document.getElementById("colorChangeText").style.color = "blue";
});

// Function to add a new element when a button is clicked
document.getElementById("addElementButton").addEventListener("click", function() {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new dynamically added element!";
  document.getElementById("elementContainer").appendChild(newElement);
});
