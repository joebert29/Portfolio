document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");

  // Set default mode to light mode
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌙";

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "☀️";
    }
  });

  // Navigation link active state functionality
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function updateActiveLink() {
    let index = sections.length; // Default to no active link
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) navLinks[index].classList.add("active");
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call in case the page is loaded with a scroll position
});
