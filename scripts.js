// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const hamburgerMenu = document.querySelector(".hamburger-menu")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburgerMenu) {
      hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active")
  
        // Animate hamburger menu
        const bars = this.querySelectorAll(".bar")
        bars.forEach((bar) => bar.classList.toggle("active"))
      })
    }
  
    // Hero section background slider
    const heroSection = document.getElementById("hero-section")
    const prevBtn = document.querySelector(".arrow-prev")
    const nextBtn = document.querySelector(".arrow-next")
  
    if (heroSection && prevBtn && nextBtn) {
      const backgrounds = ['url("sources/IMG_2684.jpg")', 'url("sources/IMG_9167.png")']
  
      let currentBg = 0
  
      // Function to change background
      function changeBackground(direction) {
        if (direction === "next") {
          currentBg = (currentBg + 1) % backgrounds.length
        } else {
          currentBg = (currentBg - 1 + backgrounds.length) % backgrounds.length
        }
  
        heroSection.style.backgroundImage = backgrounds[currentBg]
      }
  
      // Event listeners for arrow buttons
      prevBtn.addEventListener("click", () => {
        changeBackground("prev")
      })
  
      nextBtn.addEventListener("click", () => {
        changeBackground("next")
      })
    }
  
    // Contact form submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href")
  
        if (href !== "#") {
          e.preventDefault()
  
          const targetElement = document.querySelector(href)
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      })
    })
  })
  
  