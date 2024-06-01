document.getElementById('contact-form').addEventListener('submit',function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.requestFullscreen();
});

/* index styling */
document.addEventListener('DOMContentLoaded',() => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');


    hamburgerMenu.addEventListener('click', () => {

        navLinks.classList.toggle("show");
    });
});