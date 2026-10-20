// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent = new Date().getFullYear();

// WHATSAPP BOOKING

const whatsappButton = document.querySelector(".whatsapp-button");

// Replace this with the real salon owner's number,
// with their permission. Use the international format
// without +, spaces, or dashes.

const salonWhatsAppNumber = "";

whatsappButton.addEventListener("click", function (event) {

    event.preventDefault();

    if (!salonWhatsAppNumber) {
        alert("The salon's WhatsApp number has not been configured yet.");
        return;
    }

    const message = encodeURIComponent(
        "Hello! I would like to enquire about your beauty services and appointments."
    );

    const whatsappURL =
        `https://wa.me/${salonWhatsAppNumber}?text=${message}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});