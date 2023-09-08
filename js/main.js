/*

Advanced Interface Design with CSS - Lab 1 - Christopher Blouin

*/

// Target the window object and once the window loads, execute the alert inside the function to greet the user!
window.onload = function () {
  alert("Welcome to an overview about how the boilerplate came about!");
};

// Declare my backToTopButton button variable and select it within the DOM using the corresponding id.
let backToTopButton = document.querySelector("#back-to-top");

// Add an event listener to the window to listen for the users scroll and track the scroll position.
window.addEventListener("scroll", function () {
  // When the scroll position on the Y Axis in the window is greater than or equal to 320 pixels, display the element in the DOM with display: block.
  if (window.scrollY >= 320) {
    backToTopButton.style.display = "block";
  }
  // Otherwise, the back to top button will be hidden.
  else {
    backToTopButton.style.display = "none";
  }
});

// Function that will target the window object and scroll to the top:0 position with a smooth scroll once the function is called.
function scrollToTop() {
  window.scrollTo({ top: 0, behaviour: "smooth" });
}

// Event listener to call the scrollToTop function when the backToTopButton is clicked in the HTML document.
backToTopButton.addEventListener("click", scrollToTop);
