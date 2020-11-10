//EJERCICIO DOM

const link = document.querySelector("a");
const app = document.querySelector("#app");
//const app = document.getElementById("app"); //--> Es mejor usar la version querySelector

//Cambiar el texto que tiene dentro el link
link.textContent = "Visitar google";

//añadir un atributo al link
link.href = "https://google.es";

//Crear una lista
const ul = document.createElement("ul");
//const li = document.createElement("li");
//const p = document.createElement("p");

//p.textContent = "Mi texto";
//li.appendChild(p);
//ul.appendChild(li);
//app.appendChild(ul);

const arr = [
  { name: "Pan", quantity: 1 },
  { name: "Arroz", quantity: 2 },
  { name: "Huevos", quantity: 1 },
  { name: "Pepsi", quantity: 6 },
  { name: "Manzanas", quantity: 8 },
  { name: "Peras", quantity: 3 },
];

//Hacer una lista con los elementos metidos en el array
arr.forEach((item, index) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  //li.style.backgroundColor = "black";
  li.classList.add("list-item");

  p.textContent = `${item.name} - ${item.quantity}`;
  p.classList.add(index % 2 === 0 ? "even" : "odd");

  //Para meter estilos en modo "chapuza":
  //p.style.color = index % 2 === 0 ? "red" : "green";
  //p.style.fontWeight = "bold";

  li.appendChild(p);
  ul.appendChild(li);
});

app.appendChild(ul);

//-----------------------------
//EJERCICIO EVENTOS: Cambiar el color del fondo de body haciendo click a un boton
const changeColorButton = document.querySelector("#changeColor");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
//Modo 1
// changeColorButton.onclick = function () {
//   const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
//   document.body.style.backgroundColor = randomColor;
// };

//Modo 2
// function handleOnChangeColor() {
//   const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
//   document.body.style.backgroundColor = randomColor;
// }
// changeColorButton.onclick = handleOnChangeColor; //Listener

//Modo 3: Este modo es el mejor para usar
function handleOnChangeColor() {
  const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = randomColor;
}
changeColorButton.addEventListener("click", handleOnChangeColor);

//Para que deje de funcionar el boton al de 10 segundos:
setTimeout(
  () => changeColorButton.removeEventListener("click", handleOnChangeColor),
  10000
);

//------------------------

//EJERCICIO DIVS
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function handleOnChangeColor(event) {
  const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;

  event.target.style.backgroundColor = randomColor;
}
for (let i = 1; i <= 16; i++) {
  const div = document.createElement("div");
  document.body.appendChild(div);
}
const divs = document.querySelectorAll("div");
//console.log(divs);

for (const div of divs) {
  div.onclick = handleOnChangeColor;
}

//EJERCICIO INPUT
const userText = document.querySelector("#userText");
const mimiText = document.querySelector("#mimiText");
userText.addEventListener("input", (event) => {
  const text = event.target.value;

  mimiText.textContent = text.replace(/[aeiou]/g, "i");
});
