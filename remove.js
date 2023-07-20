// Function to remove the element
function removeElement() {
  const elementToRemove = document.querySelector(
    "#crisp-chatbox > div > a > span.cc-imbb.cc-qfnu"
  );
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

// Execute the removeElement function after 5 seconds
setTimeout(removeElement, 5000);
