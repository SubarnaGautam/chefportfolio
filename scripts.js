// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
  // === Mobile Menu Toggle ===
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener("click", function () {
      // Toggle navigation visibility
      navLinks.classList.toggle("active");

      // Animate hamburger bars (e.g., transform into an "X")
      const bars = this.querySelectorAll(".bar");
      bars.forEach((bar) => bar.classList.toggle("active"));
    });
  } else {
    console.warn("Hamburger menu or nav links not found.");
  }

  // === Hero Section Background Slider ===
  const heroSection = document.getElementById("hero-section");
  const prevBtn = document.querySelector(".arrow-prev");
  const nextBtn = document.querySelector(".arrow-next");
  const backgrounds = [
    'url("sources/IMG_2684.jpg")',
    'url("sources/IMG_9167.png")',
  ]; // Array of background images
  let currentBg = 0;

  if (heroSection && prevBtn && nextBtn) {
    // Function to update background with fade effect
    function changeBackground(direction) {
      // Determine new index based on direction
      currentBg =
        direction === "next"
          ? (currentBg + 1) % backgrounds.length
          : (currentBg - 1 + backgrounds.length) % backgrounds.length;

      // Add fade transition
      heroSection.style.transition = "background-image 0.5s ease-in-out";
      heroSection.style.backgroundImage = backgrounds[currentBg];
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => changeBackground("prev"));
    nextBtn.addEventListener("click", () => changeBackground("next"));
  } else {
    console.warn("Hero section or navigation buttons not found.");
  }

  // === Contact Form Submission ===
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get form values with fallback for missing elements
      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const subject = document.getElementById("subject")?.value || "";
      const message = document.getElementById("message")?.value || "";

      // Basic validation
      if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // Log form data (replace with server-side submission in production)
      console.log("Form submitted:", { name, email, subject, message });

      // Show success message
      alert(`Thank you, ${name}! Your message has been sent.`);

      // Reset form
      contactForm.reset();
    });
  } else {
    console.warn("Contact form not found.");
  }

  // === Smooth Scrolling for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.warn(`Target element for ${href} not found.`);
        }
      }
    });
  });
});