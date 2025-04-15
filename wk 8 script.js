function changeContent() {
  const content = document.getElementById("content");
  content.textContent = "The content has been changed!";
  content.style.color = "green";
  content.style.fontWeight = "bold";
  content.style.backgroundColor = "#f0f0f0";
}

function toggleBox() {
  const container = document.getElementById("boxContainer");
  const existingBox = document.getElementById("dynamicBox");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement("div");
    box.id = "dynamicBox";
    box.textContent = "This is a dynamically added box.";
    container.appendChild(box);
  }
}
