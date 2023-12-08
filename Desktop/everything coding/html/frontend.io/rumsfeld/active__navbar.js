//Active navbar
window.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;
    var navLinks = document.querySelectorAll(".navbar .nav-link");
    var sections = document.querySelectorAll("section");

    // Add click event listener to navigation links
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = event.target.getAttribute("href");
            var targetSection = document.querySelector(targetId);
            scrollToSection(targetSection);
        });
    });

    // Add scroll event listener to highlight active navigation link
    window.addEventListener("scroll", function() {
        var currentScrollPos = window.scrollY;

        sections.forEach(function(section) {
            var sectionId = section.getAttribute("id");
            var correspondingLink = document.querySelector('.navbar .nav-link[href="#' + sectionId + '"]');
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
                correspondingLink.classList.add("active");
            } else {
                correspondingLink.classList.remove("active");
            }
        });
    });

    // Helper function to scroll to a section smoothly
    function scrollToSection(section) {
        var sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });
    }

    // Set initial active state based on current URL
    navLinks.forEach(function(link) {
        if (currentURL.indexOf(link.getAttribute("href")) !== -1) {
            link.classList.add("active");
            var targetSection = document.querySelector(link.getAttribute("href"));
            scrollToSection(targetSection);
        }
    });
});




