//Descripcion: Lanza un error desde la funcion suma si el tipo del parametro no es un numero
function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    const e = new Error(
      `sum: necesita que sus parametros (x,y) sean un numero, tu pasastes: x:${x}, y:${y}`
    );
    throw e;
  }
  return x + y;
}

function sum10(x) {
  if (typeof x !== "number") {
    throw new Error(
      `sum10: necesita que su parametro (x) sea un numero, tu pasastes: x:${x}`
    );
  }
  return sum(x, 10);
}

try {
} catch (e) {
  if (e.name === "sumError") {
    console.error("Error desde sum");
  } else if (e.name === "sum10Error") {
    console.error("Error desde sum 10");
  }
}
