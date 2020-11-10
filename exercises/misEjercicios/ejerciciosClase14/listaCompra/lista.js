/*EJERCICIO: Hacer una lista de la compra. 
Añadir productos y cantidad a una lista y despues eliminarlos*/

const addButton = document.querySelector("#addButton");

//AÑADIR ITEM
function addShoppingItem() {
  const getItem = document.querySelector("#getItem");
  const getQuantity = document.querySelector("#getQuantity");
  const ul = document.querySelector("#addShoppingList");
  const li = document.createElement("li");
  const delButton = document.createElement("button");

  delButton.classList.add("delete");
  delButton.innerHTML = "Eliminar";

  if (getItem.value && getQuantity.value !== "") {
    ul.appendChild(li);
    li.innerHTML = `<strong>Producto:</strong> ${getItem.value} - <strong>Cantidad:</strong> ${getQuantity.value}`;
    li.appendChild(delButton);
  }
  getItem.value = "";
  getQuantity.value = "";

  delButton.addEventListener("click", deleteShoppingItem);
}

//ELIMINAR ITEM
function deleteShoppingItem(event) {
  const btn = event.target;
  btn.parentNode.remove();
}

addButton.addEventListener("click", addShoppingItem);
