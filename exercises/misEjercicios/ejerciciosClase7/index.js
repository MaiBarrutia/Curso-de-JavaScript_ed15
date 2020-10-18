//Cambia el orden lógico en la funcion de manera que retorne los estamentos correctos en todos los casos
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(4);
orderMyLogic(7);
orderMyLogic(11);

// Escribe una cadena de if/else if para cumplir con las siguientes condiciones
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(4);
testSize(7);
testSize(11);
testSize(19);
testSize(25);

/* En el juego del golf, cada hoyo tiene un par, lo que significa el numero promedio de golpes 
   que se espera que haga un golfista para meter la bola en un hoyo para completar el juego.
   Dependiendo de qué tan por encima o por debajo del par esten tus golpes, hay un apodo diferente.
    
   A la función se le pasarán argumentos par y strokes. Devuelve la cadena correcta de acuerdo con esta tabla que enumera los golpes en orden de prioridad; de arriba (mas alto) a abajo (mas bajo).
*/
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(5, 4);

//Cuento de Ricitos de oro
function play(params) {
  const entrarCabaña = confirm(
    "Entras en un bosque y ves una extraña cabaña entre los arboles. Quieres entrar?"
  );

  if (entrarCabaña) {
    alert("Has entrado en la cabaña!");

    const tazonAvena = prompt(
      "Entras en la cabaña y ves tres tazones de avena, elige uno: 'Caliente', 'Frio' o 'Al gusto'"
    );
    if (tazonAvena === "Caliente") {
      alert("Has elegido el tazon caliente!");
    } else if (tazonAvena === "Frio") {
      alert("Has elegido el tazon Frio!");
    } else if (tazonAvena === "Al gusto") {
      alert("Has elegido el tazon al gusto!");

      const sillas = prompt(
        "Entras en el salon y tienes tres sillas a elegir: 'grande', 'mediana', 'pequeña'"
      );
      if (sillas === "grande") {
        alert("Has elegido la silla grande!");
      } else if (sillas === "mediana") {
        alert("Has elegido la silla mediana!");
      } else if (sillas === "Al gusto") {
        alert("Has elegido la silla pequeña!");
      } else {
        alert("No has elegindo ninguna silla!");
      }
    } else {
      alert("No has elegindo ningun tazon! Sal de la cabaña!");
    }
  } else {
    alert("No has entrado en la cabaña!");
  }

  const jugarDeNuevo = confirm("Quieres jugar de nuevo?");
  if (jugarDeNuevo) {
    play();
  }
}

play();
