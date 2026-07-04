// ==========================
// Typing Animation
// ==========================

var typed = new Typed("#typing", {
    strings: [
        "Data Analyst",
        "ECE Student",
        "ML Enthusiast",
        "Embedded systems Developer",
        "Design verification Engineer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==========================
// Sticky Navbar
// ==========================

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
});

// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".home-content,.home-image,.about,.skill-card,.project-card,#contact"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ==========================
// Project Card Hover Effect
// ==========================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", function () {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ==========================
// Skill Card Animation
// ==========================

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", function () {

        skill.style.transform = "scale(1.08)";
        skill.style.transition = ".3s";

    });

    skill.addEventListener("mouseleave", function () {

        skill.style.transform = "scale(1)";

    });

});

// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);

    });

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ==========================
// Back to Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});