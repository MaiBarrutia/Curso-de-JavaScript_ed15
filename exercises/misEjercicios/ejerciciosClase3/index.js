//EJERCICIO 1
//Construye dos strings y concatenalos con el operador `+`, deben tener un significado entre los dos
const nombre = "Maider";
const apellido = "Barrutia";
console.log(nombre + " " + apellido);

//Construye dos strings y concatenalos con el operador `+=`, deben tener un significado entre los dos
let primerString = "Hola ";
let segundoString = "Maider";
primerString += segundoString;
console.log(primerString);

/*Inicializa una variable con un string que sea tu nombre, 
una variable llamada `firstQuote` con el valor `"Mi nombre es"` 
y una tercera `lastQuote` con el valor `¿cómo estas?` y concatenalas para formar una frase, ej: `Mi nombre es Iván, ¿cómo estás?`*/
const nombreString = "Maider";
const firstQuote = "Mi nombre es";
const lastQuote = "¿cómo estas?";
console.log(`${firstQuote} ${nombreString}, ${lastQuote}`);

//EJERCICIO 2
/*Declara una variable llamada `myStr` y usa los backslash 
para asignarla un valor que se vea en la consola como: 
`Soy un string "con dobles comillas", dentro de "dobles comillas"`.*/
const myStr = `Soy un string \"con dobles comillas\", dentro de \"dobles comillas\"`;
console.log(myStr);

//Realiza el mismo ejercicio con otra variable pero escapando comillas simples
const comillaSimple = `Soy un string \'con dobles comillas\', dentro de \'dobles comillas\'`;
console.log(comillaSimple);

//Escapa un backslash en otra variable e imprimelo por consola
const imprimirBackslash = "\\"
console.log(imprimirBackslash);

//Escapa en un string de tu eleccion en una nueva linea
const nuevaLinea = "Nueva\nlinea"
console.log(nuevaLinea);

//Escapa en un string de tu eleccion un retorno de carro
const retornoCarro = "Retorno \rde carro"
console.log(retornoCarro);

//Escapa en un string de tu eleccion una tabulacion
const tabulacion = "\tTabulación"
console.log(tabulacion);