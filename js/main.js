
/* =========================================================
   METRIONPARTNERS — Interacciones
   Conserva los identificadores actuales del HTML.
   ========================================================= */

(() => {
  "use strict";

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  // Menú adaptable y accesible.
  if (menuToggle && mainNav) {
    const closeMenu = () => {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      mainNav.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
    };

    menuToggle.setAttribute("aria-controls", "mainNav");
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cierra el menú al elegir un enlace.
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cierra el menú al pulsar fuera de él.
    document.addEventListener("click", (event) => {
      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Permite cerrar el menú con Escape.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mainNav.classList.contains("active")) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Restablece el estado al cambiar a escritorio.
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        closeMenu();
      }
    });
  }

  // Formulario existente.
  const form = document.getElementById("subscribeForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const interestField = document.getElementById("interest");

      const name = nameField ? nameField.value.trim() : "";
      const email = emailField ? emailField.value.trim() : "";
      const interest = interestField ? interestField.value : "";

      const previousMessage = form.querySelector(
        ".success-message, .error-message"
      );

      if (previousMessage) {
        previousMessage.remove();
      }

      let messageText = "";
      let messageClass = "error-message";

      if (!name || !email || !interest) {
        messageText =
          "Completa los campos solicitados para continuar.";
      } else {
        messageClass = "success-message";
        messageText =
          "La interfaz está lista, pero este formulario aún necesita conectarse a un servicio para recibir tu solicitud.";
      }

      const message = document.createElement("p");

      message.className = messageClass;
      message.setAttribute("role", "status");
      message.setAttribute("aria-live", "polite");
      message.textContent = messageText;

      form.appendChild(message);
    });
  }
})();
