// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
  document.getElementById('contentText').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
  document.body.style.backgroundColor = "#f0f8ff"; // Light blue background
  document.getElementById('dynamicContent').style.borderColor = "#ff6347"; // Tomato border color
});

// Add a new element to the page
document.getElementById('addElementButton').addEventListener('click', function() {
  let newElement = document.createElement('p');
  newElement.textContent = "A new dynamic paragraph has been added!";
  document.getElementById('dynamicContent').appendChild(newElement);
});

// Remove an element from the page
document.getElementById('removeElementButton').addEventListener('click', function() {
  let contentText = document.getElementById('contentText');
  if (contentText) {
    contentText.remove();
  } else {
    alert("The content has already been removed.");
  }
});
