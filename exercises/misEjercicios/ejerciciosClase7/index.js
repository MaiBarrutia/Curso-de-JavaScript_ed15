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
