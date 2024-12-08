
function toggleForm() {
    var form = document.getElementById('contact-form');
    var content = document.getElementById('content');

    if (form.style.display === 'flex') {
        form.style.display = 'none';
        content.classList.remove('blurred');
    } else {
        form.style.display = 'flex';
        content.classList.add('blurred');
    }
}
  


    document.addEventListener("DOMContentLoaded", () => {
        const textElement = document.getElementById("animated-text");
        const text = "HI THERE!";
        let index = 0;

        const typeText = () => {
            if (index < text.length) {
                textElement.textContent += text[index];
                index++;
                setTimeout(typeText, 150); // Adjust speed (150ms delay per character)
            }
        };

        typeText(); // Start typing animation
    });

