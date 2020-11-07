/*1- Simplifica el siguiente código con un operador:
const n = 87;
n= n + 1; 
n += 1;
*/
n++;

/*2-Simplifica el siguiente código con un operador:
const n = 87;
n -= 1;
*/
n--;

/*3-Convierte al operador adecuado
const a = 3;
const b = 17
const c = 12;
const d = 0;
//Cambia el codigo de debajo:
a = a + 12;
b = b -9;
c = c * 5;
d = d / 4;
*/
a += 12;
b -= 9;
c *= 5;
d /= 4;

/* Pasar las frases a JS:
  a) "no (A y B)" es lo mismo que "(no A) o (no B)"
  b) "no (A o B)" es lo mismo que "(no A) y (no B)"
  const a = true;
  const b = false;
*/
//a)
!(a && b) === !a || !b;
//b)
!(a || b) == !a && !b;

//COMPARADOR DE IGUALDAD:
/*1-function sonIgualesA12(x) {
    if(x) {
        return "Igual"
    }
    return "No igual"
}
*/
function sonIgualesA12(x) {
  if (x == 12) {
    return "Igual";
  }
  return "No igual";
}
console.log(sonIgualesA12(10));
console.log(sonIgualesA12(12));
console.log(sonIgualesA12("12"));

/*2- function sonIguales(x, y) {
    if() {
        return "Igual"
    }
    return "No igual"
}
*/
function sonIguales(x, y) {
  if (x === y) {
    return "Igual";
  }
  return "No igual";
}
console.log(sonIguales(10, "10"));
console.log(sonIguales(10, 10));

/*3-function testAnd(x) {
    if (x) {
        if (x) {
            return "Si"
        }
    }
    return "No"
}
*/
//retorna si, cuando el valor es menor o igual a 50
//retorna si, cuando el valor es mayor o igual a 25
function testAnd(x) {
  if (x <= 50 && x >= 25) {
    return "Si";
  }
  return "No";
}
console.log(testAnd(9));

/*4- function testOr(x){
    if (x) {
        return "fuera";
    }
    if (x) {
        return "fuera";
    }
    return "dentro";
}
*/
function testOr(x) {
  if (x < 10 || x > 20) {
    return "fuera";
  }
  return "dentro";
}
console.log(testOr(11));
