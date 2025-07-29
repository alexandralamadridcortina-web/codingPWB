document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTarea");
  const input = document.getElementById("inputTarea");
  const lista = document.getElementById("listaTareas");
  const alerta = document.getElementById("alerta");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${texto}
      <button class="btn btn-sm btn-danger">Eliminar</button>
    `;

    lista.appendChild(li);
    input.value = "";

    alerta.classList.remove("d-none");
    setTimeout(() => alerta.classList.add("d-none"), 2000);
  });

  lista.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.closest("li").remove();
    }
  });
});
