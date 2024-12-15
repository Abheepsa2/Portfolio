function downloadCV() {
  const link = document.createElement("a");
  link.href = "ap.pdf";
  link.download ="ap.pdf";
  link.click();
}

// Get references to the menu button and the menu links
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle the mobile menu visibility
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
