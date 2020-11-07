//GEOLOCALIZACION
const demo = document.querySelector("#demo");
const getGeoButton = document.querySelector("#getGeo");

const getGeo = () => {
  if (navigator.geolocation != null) {
    navigator.geolocation.getCurrentPosition((position) => {
      demo.innerHTML = `Lat: ${position.coords.latitude} - Long: ${position.coords.longitude}`;
    });
  }
};
//getGeoButton.onclick = getGeo;

//DETECTAR SI ESTAMOS EN UN DESKTOP, TABLET O MOBILE
const LARGE_SIZE = "LARGE_SIZE";
const MEDIUM_SIZE = "MEDIUM_SIZE";
const SMALL_SIZE = "SMALL_SIZE";

const Size = {
  LARGE: LARGE_SIZE,
  MEDIUM: MEDIUM_SIZE,
  SMALL: SMALL_SIZE,
};

const size = () => {
  const { orientation, width, height } = window.screen;
  const { angle, type } = orientation;

  if (type === "landscape-primary" && angle === 90) {
    //si está tumbado
    return height >= 960
      ? Size.LARGE
      : height >= 660
      ? Size.MEDIUM
      : Size.SMALL;
  }

  return width >= 960 ? Size.LARGE : height >= 660 ? Size.MEDIUM : Size.SMALL;
};

const toString = (size) => {
  switch (size) {
    case Size.LARGE:
      return "large";
    case Size.MEDIUM:
      return "medium";
    case Size.SMALL:
      return "small";
    default:
      throw new TypeError(`Invalid screen size value: ${size}`);
  }
};

const saludoText = document.querySelector("#saludo");

saludoText.classList.add(`text-${toString(size())}`);

//EJERCICIO: CREADOR DE PERSONAJES DE DANGER AND DRANGONS (D&D PJ)
/*
Hacer un generador de personajes

Personaje que tiene estas habilidades:
- Strength
- dexterity
- constitution
- intelligence
- wisdom
- charisma

Puntos iniciales:
- hitpoint = 10 + constitutionModifier
- constitutionModifier = Round.foor((constitution - 10) / 2)

{
Strength
dexterity
constitution
intelligence
wisdom
charisma
hitpoint
}

Para calcular la fuerza:
-5,3,1,6: descartar el 1 y sumamos 5 + 3 + 6 = 14 y asignamos a strength

Para calcular la destreza:
-3,2,5,3: descartar el 2 y sumamos 3 + 5 + 3 = 11 y asignamos a dexterity

Para calcular la dexterity:
-1,1,1,1: descartar el 1 y sumamos 1 + 1 + 1 = 3 y asignamos a constitution

Para calcular la constitution:
-2,1,6,6: descartar el 1 y sumamos 2 + 6 + 6 = 14 y asignamos a intelligence

Para calcular la intelligence:
-3,5,3,4: descartar el 3 y sumamos 5 + 3 + 4 = 12 y asignamos a wisdom

Para calcular la wisdom:
-6,6,6,6: descartar el 6 y sumamos 6 + 6 + 6 = 18 y asignamos a charisma

- como constitution es 3, constitutionModifier es -4 entonces los hitpoints son 6

*/
const skillModifier = (constitution) => Math.floor((constitution - 10) / 2);
// const rollSkill = () => {
//     return [0, 0, 0, 0].map(() => Math.floor(Math.random() * 6) + 1)
//     .sort()
//     .slice(0,1)
//     .reduce((acc, i)=> acc + i, 0);
// }

class Personaje {
  static rollSkill() {
    return [0, 0, 0, 0]
      .map(() => Math.floor(Math.random() * 6) + 1)
      .sort()
      .slice(1)
      .reduce((acc, i) => acc + i, 0);
  }
  constructor() {
    this.strength = Personaje.rollSkill();
    this.dexterity = Personaje.rollSkill();
    this.constitution = Personaje.rollSkill();
    this.intelligence = Personaje.rollSkill();
    this.wisdom = Personaje.rollSkill();
    this.charisma = Personaje.rollSkill();
    this.hitpoint = 10 - skillModifier(this.constitution);
  }
}

const personaje = new Personaje();
console.log(personaje);
