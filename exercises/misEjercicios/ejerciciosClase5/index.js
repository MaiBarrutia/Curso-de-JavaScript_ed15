//1- Crear dos variables booleanas
    const verdadero = true;
    const falso = false;

//2- Crear dos variables con tipos mutables y 2 con tipos inmutables
    //Mutables
    const mtObj = {x: 3, b: 8};
    const mtArr = [8,2,5];

    //Inmutables
    const inmString = "foo";
    const inmNumber = 2;

//3- Crea 1 variable del tipo deseado y comparala contra undefined por igualdad
    const stringIndef = "3";
    console.log(numIndef == undefined);

//4- Crea 1 variable del tipo deseado y comparala contra null por igualdad
    const stringNulo = "5";
    console.log(stringNulo == null);

//5- Crea 4 variables de tipos distintos y comparalas entre si, una de ellas debe ser 0 y otra -0
    "1" == 

//6- Introduce en el objeto global un objeto cuya unica propiedad sea una variable del tipo que desees
    globalThis.lugar = {name: "Roma"};
    globalThis["lugar"] = {name: "Roma"};
    
//7- Inicializa dos arrays con los elementos que desees, al menos uno de los elementos debe ser otra expresión
    const arr1 = [1, 2+4, {x:2}, arr2];

//8- Inicializa 2 objetos con las propiedades que desees al menos 1 de las propiedades debe ser otra expresión
    const obj1 = {x: 1, y: [1 + 2]};
    const obj2 = {x: 1, y: [arr1]};
    obj2.y[0].x; // para acceder a la x de la variable obj1 desde obj2

//9- Inicializa 2 objetos y 2 arrays y haz una expresión de accesos a sus propiedades y elementos en cada uno de ellos con las dos sintaxis de acceso que hemos visto.
    const arr1 = [14, {x:2}];
    arr3[0]

//10- Inicializa 2 objetos Date en 2 variables.
    const d1 = new Date();
    const d2 = new Date();