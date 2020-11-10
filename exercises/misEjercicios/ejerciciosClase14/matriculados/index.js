//EJERCICIOS
//Lista de usuarios con nombre y apellido y si está o no matriculado

const alumns = [
  { name: "Nombre 1", surname: "Apellido 1", registered: true },
  { name: "Nombre 2", surname: "Apellido 2", registered: false },
  { name: "Nombre 3", surname: "Apellido 3", registered: true },
  { name: "Nombre 4", surname: "Apellido 4", registered: false },
  { name: "Nombre 5", surname: "Apellido 5", registered: false },
  { name: "Nombre 6", surname: "Apellido 6", registered: true },
];

//Renderizar una tabla con los 3 campos
//Si está matriculado poner un texto matriculado en verde
//Si no está matriculado poner no matriculado en rojo
//Tabla ordenada por: primero los matriculados y luego los no matriculados

function render() {
  const alumnList = document.querySelector("#usersList");
  [...alumns]
    .sort((a, b) => (a.registered ? -1 : 1))
    .forEach((alumn) => {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdSurname = document.createElement("td");
      const tdRegistered = document.createElement("td");

      tdName.textContent = alumn.name;
      tdSurname.textContent = alumn.surname;
      tdRegistered.textContent = alumn.registered
        ? "MATRICULADO"
        : "NO MATRICULADO";
      tdRegistered.classList.add(
        alumn.registered ? "registered" : "not-registered"
      );

      tr.appendChild(tdName);
      tr.appendChild(tdSurname);
      tr.appendChild(tdRegistered);

      alumnList.appendChild(tr);
    });
}
render();

//Version 2
function render2() {
  const alumnsList = document.querySelector("#usersList");
  const sortedAlumns = [...alumns]
    .sort((a, b) => (a.registered ? -1 : 1))
    .map(
      (alumn) => `
    <tr>
      <td>${alumn.name}</td>
      <td>${alumn.surname}</td>
      <td class=${alumn.registered ? "registered" : "not-registered"}>${
        alumn.registered ? "MATRICULADO" : "NO MATRICULADO"
      }</td>
    </tr>`
    );
}
//render2();
