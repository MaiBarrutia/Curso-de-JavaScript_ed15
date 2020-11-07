//EJERCICIO 4: HIGHSCORE
/*Hacer un marcador de puntuaciones basado en una clase */
//1- Administrar la lista de puntuación mas alta de unn jugador
//2- Construir un componente de puntuaciones mas altas del juego Frogger.
//3-Escribe metodos que devuelvan:
//3a-la puntuación más alta,
//3b-la ultima agregada
//3c-las 3 más altas
//3d-Las puntuaciones en un string que quede bonito
//3e-el maximo de puntuaciones a agregar son 10
//3e-1-Si se añade una nueva puntuación se borra la mas antigua agregada
//4-Se puede grabar una puntuacion para conservarla siempre

/*
IVN: 5000

*/

const descending = (a, b) => b - a;

class Highscore {
  constructor(scores = []) {
    this.scores = scores; //this.scores = scores || []  //--> Esto se pone si no pones score = [] en parametros
    this.saved = null;
  }
  addScore(score, save = false) {
    if (typeof score !== "number") {
      throw new Error(
        `Parámetro inválido, score debe ser un número, mandastes: ${score}`
      );
    }
    if (this.scores.lenght === 10) {
      this.scores.shift(); //--> shift saca la mas antigua agregada
      //this.scores.pop(); //-->
    }
    if (save) {
      this.saved = score;
    }
    this.scores.push(score);
  }
  bestScore() {
    return Math.max(...this.scores);
  }
  bestThreeScores() {
    return [...this.scores].sort(descending).slice(0, 3);
  }

  lastScore() {
    return this.scores[this.scores.lenght - 1];
  }
  toString() {
    return (
      this.scores
        .map((score) => `- ${score}`)
        //.map((scoreString) => "\n" + scoreString)
        .join("\n")
    ); //.join("");
  }
}

// function max(a, b, c, d, e){
//   return Math.max(a, b, c, d, e);
// }

const puntuacion = new Highscore();
for (let i = 0; i <= 10; i++) {
  puntuacion.addScore(Math.floor(Math.random() * 10000));
}
//puntuacion.addScore(10);
puntuacion.bestScore();
puntuacion.bestThreeScores();
puntuacion.lastScore();
puntuacion.toString();
