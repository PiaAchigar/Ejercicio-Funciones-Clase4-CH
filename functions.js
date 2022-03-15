/*FUNCION 1: 
            Escriba una función que permita seleccionar una operación de las siguientes: 
            a. SUMAR UN NÚMERO n DE NÚMEROS  (sumar(n))
            b. MULTIPLICAR Un Número n de operandos (factorial(c))
            c. SECUENCIA (secuencia(a))
               
    */
function selector() {
  let accion = prompt(
    "Que desea hacer? \n SUMAR \n FACTORIAL \n SECUENCIA"
  ).toLowerCase();
  let numeros = Number(prompt("Ingrese la cantidad de numero a calcular:"));
  switch (accion) {
    case "sumar":
      sumar(numeros);
      break;
    case "factorial":
      console.log(numeros);
      factorial(numeros);
      break;
    case "secuencia":
      secuencia(numeros);
      break;
  }
  alert("Fin del cálculo. Gracias por elegirnos");
}
/*FUNCION 2: 
        Escriba una función que dado un número n, retorne la suma de los números ingresados por el usuario. 
       (pia) Escriba una funcion que dado "n" numeros, retorne la suma de dichos numeros.
    */
function sumar(n) {
  console.log("entró");
  let suma = 0;
  for (let i = 0; i < n; i++) {
    let numero = Number(prompt("Ingrese un numero por favor"));
    if (!isNaN(numero)) {
      suma += numero;
    } else {
      alert("Eso no es un numero bichiiii!");
    }
  }
  alert(`El resultado de la suma es : ${suma}`);
}

//FUNCION 3:
/*
        Escriba una función que dado un número n, retorne la multiplicación de los números ingresados por el usuario.
    */
function factorial(c) {
  let facto = 1;
  let numero = 0;
  for (let i = 0; i < c; i++) {
    numero = Number(prompt("Ingrese el numero a factorizar"));
    if (!isNaN(numero)) {
      for (let k = 0; k < numero; k++) {
        facto = facto * (numero - k);
      }
      /*
      for(let k = numero; k>0;k--){
        facto *= k;
      }
      */
      alert(`El factorial de ${numero} numeros es : ${facto}`);
      facto = 1;
    } else {
      alert("Eso no es un numero bichiiii!");
    }
  }
}
//FUNCION 4:
/*
     c. SECUENCIA (secuencia(a))
                Siempre que n sea 0, secuencia retorna 1
                Siempre que n sea 1, secuencia retorna 1
                Para todos los demás números, secuencia retorna
                    n-1 + n-2
            d. El sistema debe mostrar una ventana donde el usuario debe ingresar una opción de las mencionadas arriba o FIN para terminar
    */
function secuencia(a) {
  let numero = 1;
  for (let i = 0; i < a; i++) {
    numero = Number(prompt("Ingrese el numero secuencial que desea calcular"));
    let resta = numero - 1;
    let fib = resta + (numero - 2);
    if (numero === 1 || numero === 0) {
      fib = 1;
    }
    alert(`Secuencia de ${numero} es ${fib}`);
  }
}

selector();
