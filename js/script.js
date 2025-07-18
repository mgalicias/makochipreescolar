// This file can be used for any simple JavaScript interactions.
// For this static site, a very basic example is provided,
// mainly for demonstration or future expansion.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links (if you add them within the page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Basic form submission handling for contact.html
    // This will provide user feedback but won't send the email without a backend service.
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            // Prevent default form submission if using a backend service like Formspree or Netlify Forms
            // If you are relying on Formspree/Netlify, you might remove the preventDefault
            // and let them handle the submission. This example is for client-side feedback.
            e.preventDefault();

            // Simulate form submission success/failure
            // In a real scenario, you'd send an AJAX request here
            // and update formStatus based on the server's response.
            formStatus.textContent = "Sending your message...";
            formStatus.style.color = "blue";

            setTimeout(() => {
                // Here you'd typically handle the fetch request to your form service
                // For Formspree, the 'action' attribute handles the submission directly.
                // For Netlify, the 'data-netlify="true"' attribute handles it on build.

                // For simple client-side feedback without a backend response confirmation:
                formStatus.textContent = "Thank you for your message! We will get back to you soon.";
                formStatus.style.color = "green";
                contactForm.reset(); // Clear the form
            }, 2000); // Simulate network delay
        });
    }

    // Get DOM elements
    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Toggle menu on hamburger click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Prevent body scroll when menu is open
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Handle clicks outside the menu
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});