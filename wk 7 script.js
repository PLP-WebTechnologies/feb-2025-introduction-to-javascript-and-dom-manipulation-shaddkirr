// Function to change the text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
  document.getElementById('header').textContent = 'Text Changed Dynamically!';
});

// Function to modify the style of the header dynamically
document.getElementById('changeStyleButton').addEventListener('click', function() {
  document.getElementById('header').style.color = 'red';
  document.getElementById('header').style.fontSize = '32px';
});

// Function to add a new element to the container
document.getElementById('addElementButton').addEventListener('click', function() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('new-element');
  newDiv.textContent = 'This is a dynamically added element!';
  
  // Append the new div to the container
  document.getElementById('container').appendChild(newDiv);
});
