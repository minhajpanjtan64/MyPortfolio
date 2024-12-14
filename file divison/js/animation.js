

document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animated-text");
    const animatedName = document.getElementById("animated-name");
    const animatedRole = document.getElementById("animated-role");

    const text = "HI THERE! I'm ";
    // const text2 = "THIS IS";
    // The text you want to appear first
    const name = "Minhaj"; // The name text
    const roleText = "PASSIONATE WEB DEVEOPER"; // The role text (e.g., web developer)

    // Function to animate the text typing effect
    function animateText(element, text,delay = 0, animationDuration = 3) {
        let index = 0;
        element.textContent = ""; 

        // Typing animation
        setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            }
        }, 100); // 100ms delay between each character
    }

    // Start animation with delay
    animateText(animatedText, text);
    setTimeout(() => {
        animateText(animatedName, name, 1000);
        animateText(animatedRole, roleText, 3000, 4); // Delays role text after the name is done
    }, 3000); // Delay the name animation after the text
});



   