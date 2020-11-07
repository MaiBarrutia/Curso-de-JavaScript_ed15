// EJERCICIO 1
/*const car = {
    brand: "Ford",
    speed: 0,
    acelerate: function (amount) {
        this.speed += amount;
    },
    break: function (amount) {
        this.speed -= amount;
    },
    status: function (amount) {
        return `${this.brand} running at ${this.speed} km/h`;
    },
}*/

//Convertir lo anterior a la version js6

function Car(brand) {
  this.brand = brand;
  this.speed = 0;
}

Car.prototype = {
  acelerate(amount) {
    return (this.speed += amount);
  },
  break(amount) {
    return (this.speed -= amount);
  },
  status(amount) {
    return `${this.brand} running at ${this.speed} km/h`;
  },
};
const ferrari = new Car("Ferrari");
const ford = new Car("Ford");
ferrari.acelerate(50);
console.log(ferrari.status());

//EJERCICIO 2
//muestro el modelo del coche y se muestra en el display del status
//no puedo frenar por debajo de 0 km/h incluso si freno
//metodo que pone a 0 el coche
//metodo que retorna booleano diciendo que el coche está activo (que su velocidad está por encima de 0)
//Acepta la velocidad limite de dicho coche topSpeed, no puedo acelerar por encima de la velocidad máxima
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
  acelerate(amount) {
    if (this.speed + amount < this.topSpeed) {
      this.speed += amount;
    }
  }
  break(amount) {
    if (this.speed - amount >= 0) {
      this.speed -= amount;
    }
  }
  status() {
    return `El coche de marca ${this.brand} y modelo ${this.model} corre a ${this.speed} km/h`;
  }
  activo() {
    if (this.speed >= 0) {
      return true;
    } else {
      return false;
    }
  }
  parar() {
    this.break(this.speed); //this.speed = 0;
  }
}

const ferrari = new Car("Ferrari", "458");
const ford = new Car("Ford", "Mondeo");

ferrari.acelerate(0);
console.log(ferrari.status());

//EJERCICIO 3
//1-Crea una clase TV con las propiedades: brand, channel y volumen
//1a-El canal debe ser el 1 por defecto
//1b-El volumen debe ser 50 por defecto
//2-Incluye metodos para subir y bajar el volumen
//2a-El volumen nunca puede estar por encima de 100 ni por debajo de 0
//3-Incluye un metodo para cambiar el canal
//3a-La TV solo tiene 50 canales, si intentas cambiar al 60 te quedas en el que estas
//4- Añade un metodo para restablecer la TV (canal al 1, volumen al 50)
//5- Incluye un status, que retorn: Modelo en el canal X, volumen al X

class TV {
  constructor(brand, channel, volumen) {
    this.brand = brand;
    this.channel = 1;
    this.volumen = 50;
  }
  subirVolumen(volumen) {
    if (this.volumen <= 100 && this.volumen >= 0) {
      this.volumen += volumen;
    }
    this.volumen = 100;
  }

  bajarVolumen(volumen) {
    if (this.volumen <= 100 && this.volumen >= 0) {
      this.volumen -= volumen;
    }
    this.volumen = 0;
  }

  cambiarCanal(channel) {
    if (channel > 50) {
      this.channel = this.channel;
    }
    this.channel = channel;
  }

  restablecerCanal() {
    this.volumen = 50;
    this.channel = 1;
  }

  status() {
    return `Modelo en el canal ${this.channel}, volumen al ${this.volumen}`;
  }
}

const canal1 = new TV("marca", "etb", 65);

console.log(canal1.subirVolumen(5));
// console.log(canal1.bajarVolumen());
// console.log(canal1.cambiarCanal());
// console.log(canal1.restablecerCanal());
// console.log(canal1.status());
