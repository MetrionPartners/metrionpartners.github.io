// =========================
// MENÚ MÓVIL
// =========================

const menuToggle =
document.getElementById("menuToggle");

const mainNav =
document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });

}



// =========================
// CERRAR MENÚ AL NAVEGAR
// =========================

const navLinks =
document.querySelectorAll("#mainNav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

    });

});



// =========================
// FORMULARIO COMUNIDAD
// =========================

const form =
document.getElementById("subscribeForm");


if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const name =
        document
        .getElementById("name")
        .value
        .trim();

        const email =
        document
        .getElementById("email")
        .value
        .trim();

        const interest =
        document
        .getElementById("interest")
        .value;

        if (
            !name ||
            !email ||
            !interest
        ) {
            return;
        }

        const oldMessage =
        document.querySelector(
            ".success-message"
        );

        if (oldMessage) {
            oldMessage.remove();
        }

        const message =
        document.createElement("p");

        message.className =
        "success-message";

        message.textContent =
        `Gracias ${name}, tu solicitud fue recibida.`;

        form.appendChild(message);

        form.reset();

        setTimeout(() => {

            message.remove();

        }, 5000);

    });

}
