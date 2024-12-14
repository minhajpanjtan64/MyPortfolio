document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar nav ul li a");

    // Function to remove 'active' class from all links
    function removeActiveClasses() {
        links.forEach(link => link.classList.remove("active"));
    }

    // Add event listeners to each link
    links.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClasses(); // Remove 'active' from all links
            this.classList.add("active"); // Add 'active' to the clicked link
        });
    });

    // Optional: Automatically mark the current page as active
    const currentPage = window.location.href;
    links.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
});
