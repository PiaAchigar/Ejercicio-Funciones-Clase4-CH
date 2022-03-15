/*FUNCION 1: 
            Escriba una función que permita seleccionar una operación de las siguientes: 
            a. SUMAR UN NÚMERO n DE NÚMEROS  (sumar(n))
            b. MULTIPLICAR Un Número n de operandos (factorial(c))
            c. SECUENCIA (secuencia(a))
              Escriba una función que permita mostrar el menú de una calculadora avanzada. 
            El programa debe mostrar siempre las siguientes opciones: 
                SUMA_AVANZADA 
                MULTIPLICACION_AVANZADA
                SECUENCIAR 
                FIN
                
            Su programa debe mostrar la ventana de opciones siempre, hasta que el usuario ingrese la palabra FIN.
            Su programa debe validar que la opción ingresada sea correcta. 
            Su programa debe hacer un llamado a otras funciones (QUE NO DEBE ESCRIBIR EN ESTE PUNTO) 
            
            Las funciones de operaciones avanzadas, tendrán los nombres mostrados: 
            
            a. SUMA_AVANZADA  (sumarAvanzado(n))
            b. MULTIPLICACION_AVANZADA (multiplicarAvanzado(c))
            c. SECUENCIA (secuenciar(a)) 
    */
function selector() {
  let accion = prompt(
    "Que desea hacer? \nA - SUMA_AVANZADA \n B - MULTIPLICACION_AVANZADA \n C - SECUENCIA \n FiN para terminar"
  ).toLowerCase();
  let cantNumeros = 0;
  let bandera = true;
  while (bandera) {
    switch (accion) {
      case "a":
        cantNumeros = Number(
          prompt("Ingrese la cantidad de numero a calcular:")
        );
        sumarAvanzado(cantNumeros);
        break;
      case "b":
        cantNumeros = Number(
          prompt("Ingrese la cantidad de numero a calcular:")
        );
        multiplicarAvanzado(cantNumeros);
        break;
      case "c":
        cantNumeros = Number(
          prompt("Ingrese la cantidad de numero a calcular:")
        );
        secuenciar(cantNumeros);
        break;
      case "fin":
        alert("Fin del cálculo. Gracias por elegirnos");
        bandera = false;
        break;
      default:
        alert("Opcion incorrecta, intente orta vez...");
    }
    if (accion != "fin") {
      accion = prompt(
        "Que desea hacer? \nA - SUMA_AVANZADA \n B - MULTIPLICACION_AVANZADA \n C - SECUENCIA \n FiN para terminar"
      ).toLowerCase();
    }
  }
}
/* FUNCION 2:
Escriba una función que dado un número n, retorne la suma de los números ingresados por el usuario. 
        Es decir, si el usuario ingresa por ejemplo, el número 5, debe mostrarle 5 veces una ventana que permita ingresar un número y retornar el valor de la suma de 
        los n números ingresados. 
        
        Su programa debe validar que el dato inicial ingresado por el usuario sea un número. 
        Su programa debe validar que cada operando sea un número 
        Su programa debe mostrar la opción de "INGRESAR UN NÚMERO", a menos que el usuario escriba 'MENU', con lo cual su programa debe finalizar. 
    */
function sumarAvanzado(n) {
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
        Es decir, si el usuario ingresa por ejemplo, el número 5, debe mostrarle 5 veces una ventana que permita ingresar un número y retornar
        el valor de la multiplicación de los n números ingresados. 
        
        Su programa debe validar que el dato inicial ingresado por el usuario sea un número. 
        Su programa debe validar que cada operando sea un número 
        Su programa debe mostrar la opción de "INGRESAR UN NÚMERO", a menos que el usuario escriba 'MENU', con lo cual su programa debe finalizar.
    */
function multiplicarAvanzado(c) {
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
    SECUENCIA (secuencia(a))
                Siempre que n sea 0, secuencia retorna 1
                Siempre que n sea 1, secuencia retorna 1
                Para todos los demás números, secuencia retorna
                    n-1 + n-2
     El sistema siempre debe mostrar una ventana donde le permite al usuario "INGRESAR UN NÚMERO" o "MENU" para finalizar.
    */
function secuenciar(a) {
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
