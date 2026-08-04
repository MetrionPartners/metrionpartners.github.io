// =========================
// SCROLL SUAVE
// =========================

const links =
document.querySelectorAll('a[href^="#"]');


links.forEach(link => {

    link.addEventListener("click", e => {

        const target =
        document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});



// =========================
// NEWSLETTER
// =========================

const form =
document.getElementById("subscribeForm");


if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const email =
        document
        .getElementById("email")
        .value
        .trim();

        if (!email) return;

        const existingMessage =
        document.querySelector(
            ".success-message"
        );

        if (existingMessage) {
            existingMessage.remove();
        }

        const message =
        document.createElement("p");

        message.className =
        "success-message";

        message.textContent =
        "Gracias por suscribirte a Metrion Partners.";

        form.appendChild(message);

        form.reset();

        setTimeout(() => {

            message.remove();

        }, 3000);

    });

                }
