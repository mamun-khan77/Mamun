document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show a specific section
    function showSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        document.getElementById(sectionId).classList.add('active');

        // Update active nav link
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top of section for better UX
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // "Explore Our Solutions" button functionality
    document.getElementById('exploreBtn').addEventListener('click', function() {
        showSection('solutions');
    });

    // Solution detail view functionality
    const solutionBtns = document.querySelectorAll('.solution-btn');
    const backBtns = document.querySelectorAll('.back-to-solutions');
    const solutionCards = document.querySelector('.row:not(.solution-details)');
    const solutionDetails = document.querySelectorAll('.solution-details');

    solutionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const solution = this.getAttribute('data-solution');

            // Hide all solution cards
            solutionCards.style.display = 'none';

            // Hide all solution details
            solutionDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Show selected solution details
            document.getElementById(`${solution}-details`).style.display = 'block';
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hide all solution details
            solutionDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Show solution cards
            solutionCards.style.display = 'flex';
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        // Simple validation
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (message.value.trim() === '') {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.remove('is-invalid');
        }

        if (isValid) {
            // Form is valid, simulate form submission
            formStatus.innerHTML = '<div class="alert alert-success">Thank you for your message! We will get back to you soon.</div>';
            formStatus.style.display = 'block';
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            formStatus.innerHTML = '<div class="alert alert-danger">Please fill out all required fields correctly.</div>';
            formStatus.style.display = 'block';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });
});