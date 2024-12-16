function validateForm(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Get the values entered by the user
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true; // Flag to track if the form is valid

    // Validate name
    if (name === "" || name.length < 3) {
        alert("Please enter a valid name with at least 3 characters.");
        isValid = false;
        nameInput.focus(); // Set focus on the invalid field
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
        emailInput.focus(); // Set focus on the invalid field
    }

    // Validate message (optional but recommended)
    if (message === "") {
        alert("Please enter a message.");
        isValid = false;
        messageInput.focus(); // Set focus on the invalid field
    }

    // If all validations pass, show success or proceed
    if (isValid) {
        alert("Thank you for your message! Your form has been submitted successfully.");
        // Submit the form programmatically or handle further processing
        document.querySelector("form").reset(); // Clear the form
    }
}

function toggleForm() {
    const contactForm = document.getElementById("contact-form");
    contactForm.style.display = contactForm.style.display === "block" ? "none" : "block";
}

// Attach the validation function to the form's submit event
document.querySelector("form").addEventListener("submit", validateForm);


