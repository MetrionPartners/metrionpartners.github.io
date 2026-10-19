
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // =========================================
  // 1. MENÚ DE NAVEGACIÓN MÓVIL
  // =========================================

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cerrar el menú al seleccionar un enlace.
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });

    // Cerrar con Escape.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  // =========================================
  // 2. BUSCADOR DE PROFESIONALES
  // =========================================

  const searchForm = document.getElementById("directorySearch");
  const searchInput = document.getElementById("professionalQuery");
  const professionalGrid = document.getElementById("professionalGrid");
  const resultCount = document.getElementById("resultCount");
  const noResults = document.getElementById("noResults");

  if (searchForm && searchInput && professionalGrid) {
    const professionalCards = Array.from(
      professionalGrid.querySelectorAll(".professional-card")
    );

    function normalizeText(value) {
      return String(value || "")
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }

    function filterProfessionals() {
      const query = normalizeText(searchInput.value);
      let visibleCount = 0;

      professionalCards.forEach(function (card) {
        const searchableText = normalizeText(
          card.innerText + " " + (card.dataset.search || "")
        );

        const matches = !query || searchableText.includes(query);

        card.hidden = !matches;

        if (matches) {
          visibleCount++;
        }
      });

      if (resultCount) {
        resultCount.textContent =
          visibleCount +
          (visibleCount === 1 ? " perfil" : " perfiles");
      }

      if (noResults) {
        noResults.hidden = visibleCount !== 0;
      }
    }

    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      filterProfessionals();

      const directorySection = document.getElementById("profesionales");

      if (directorySection) {
        directorySection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

    // Actualizar resultados mientras se escribe.
    searchInput.addEventListener("input", filterProfessionals);

    // Mostrar todos los perfiles al cargar la página.
    filterProfessionals();
  }

  // =========================================
  // 3. FORMULARIO DE SUSCRIPCIÓN EXISTENTE
  // =========================================
  // Conserva la respuesta visual si el formulario
  // aparece en alguna página del sitio.
  // No envía ni almacena información en un servidor.

  const subscribeForm = document.getElementById("subscribeForm");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let message = subscribeForm.querySelector(".success-message");

      if (!message) {
        message = document.createElement("p");
        message.className = "success-message";
        message.setAttribute("role", "status");
        subscribeForm.appendChild(message);
      }

      message.textContent =
        "La interfaz está preparada, pero el formulario aún necesita conectarse a un servicio para registrar los datos.";
      message.hidden = false;
    });
  }
});
