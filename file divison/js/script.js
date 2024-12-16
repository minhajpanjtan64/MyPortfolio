function toggleForm() {
    const form = document.getElementById('contact-form');
    const content = document.getElementById('content');

    if (form.style.display === 'flex') {
        form.style.display = 'none'; // Hide the form
        content.classList.remove('blurred'); // Remove blur effect
    } else {
        form.style.display = 'flex'; // Show the form
        content.classList.add('blurred'); // Apply blur effect
    }
}
