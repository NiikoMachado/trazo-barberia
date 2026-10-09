"use strict";

/* 1. MENÚ MÓVIL
   querySelector busca un elemento del HTML. addEventListener escucha acciones. */
const menuButton = document.querySelector(".menu-toggle");
const menuLabel = document.querySelector("#menu-label");
const navigation = document.querySelector("#navegacion");

// El menú queda visible si JavaScript está desactivado.
menuButton.hidden = false;
navigation.dataset.enhanced = "true";

function setMenuOpen(open) {
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuLabel.textContent = open ? "Cerrar" : "Menú";
}

menuButton.addEventListener("click", function () {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () { setMenuOpen(false); });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 801px)").addEventListener("change", function (event) {
  if (event.matches) setMenuOpen(false);
});

/* 2. CONSULTA SIMULADA
   No hay teléfono real, formulario enviado, base de datos ni API de pago.
   La selección y el texto existen solo mientras la página está abierta. */
const dialog = document.querySelector("#reserva-dialog");
const serviceSelect = document.querySelector("#servicio");
const message = document.querySelector("#mensaje");
const copyStatus = document.querySelector("#estado-copia");
const closeButton = document.querySelector("#cerrar-dialog");
let lastBookingButton = null;

function updateMessage() {
  const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
  message.value = "Hola, TRAZO. Quisiera consultar disponibilidad para " +
    serviceName.toLowerCase() + ". ¿Qué horarios tienen? ¡Gracias!";
  copyStatus.textContent = "";
}

document.querySelectorAll("[data-reserva]").forEach(function (button) {
  button.addEventListener("click", function (event) {
    // Los enlaces conservan el contacto como alternativa en navegadores antiguos.
    if (typeof dialog.showModal !== "function") {
      document.querySelector("#contacto").scrollIntoView();
      return;
    }
    event.preventDefault();
    lastBookingButton = button;
    serviceSelect.value = button.dataset.reserva || "corte";
    updateMessage();
    dialog.showModal();
    document.body.classList.add("modal-open");
  });
});

serviceSelect.addEventListener("change", updateMessage);
closeButton.addEventListener("click", function () { dialog.close(); });

// Un clic fuera de la ventana la cierra. Escape ya funciona de forma nativa.
dialog.addEventListener("click", function (event) {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right ||
    event.clientY < rect.top || event.clientY > rect.bottom;
  if (event.target === dialog && outside) dialog.close();
});

dialog.addEventListener("close", function () {
  document.body.classList.remove("modal-open");
  if (lastBookingButton) {
    // Si el menú móvil se cerró, devolvemos el foco a su botón visible.
    const target = lastBookingButton.getClientRects().length ? lastBookingButton : menuButton;
    target.focus({ preventScroll: true });
  }
});

/* 3. COPIAR TEXTO
   El portapapeles suele requerir HTTPS. Si falla al abrir el archivo local,
   seleccionamos el mensaje para poder copiarlo con Cmd+C o Ctrl+C. */
document.querySelector("#copiar-mensaje").addEventListener("click", async function () {
  try {
    if (!navigator.clipboard) throw new Error("Portapapeles no disponible");
    await navigator.clipboard.writeText(message.value);
    copyStatus.textContent = "Consulta copiada. No se envió ningún mensaje.";
  } catch {
    message.focus();
    message.select();
    copyStatus.textContent = "Texto seleccionado. Copialo con Cmd+C, Ctrl+C o la opción Copiar de tu celular.";
  }
});

updateMessage();
