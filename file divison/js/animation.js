document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");
    const nameElement = document.getElementById("animated-name");

    const text = "HI THERE!";
    const nameText = "THIS IS Minhaj";

    let textIndex = 0;
    let nameIndex = 0;

    // Function to type "HI THERE!"
    const typeText = () => {
        if (textIndex < text.length) {
            textElement.textContent += text[textIndex];
            textIndex++;
            setTimeout(typeText, 150); // Adjust speed of typing
        } else {
            setTimeout(typeName, 500); // Delay before typing the name
        }
    };

    // Function to type "THIS IS Minhaj"
    const typeName = () => {
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText[nameIndex];
            nameIndex++;
            setTimeout(typeName, 150);
        }
    };

    typeText(); // Start typing animation
});
