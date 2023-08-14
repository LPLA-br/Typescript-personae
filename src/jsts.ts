/*Coisas que
 *passaram desapercebidas
 *por min.*/

//R E F E R E N C E
//array function object podem ser referênciados.
let a: object = { "t s": 10 }
let b: object = a;
b["t s"] = 20;
console.log(b["t s"]);

//C O P Y
//Primitivos
let c: number = 10;
let d: number = c;
d = 20;
console.log(c);
