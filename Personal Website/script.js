document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Parallax Effect
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".parallax").forEach((section) => {
            let speed = 0.3;
            let yOffset = window.scrollY * speed;
            section.style.transform = `translateY(${yOffset}px)`;
        });
    });

    // Fade-in effect on load
    document.querySelectorAll(".fade-in").forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
});