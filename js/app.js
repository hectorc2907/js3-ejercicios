function ejercicio1() {
  let mensajePunto1 = document.getElementById("mensajePunto1");
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let lista = "";

  lista += "<ul>";
  for (let i = 0; i < meses.length; i++) {
    lista += "<li>" + meses[i] + "</li>";
  }
  lista += "</ul>";

  mensajePunto1.innerHTML = lista;
}
let punto1 = document.getElementById("btnPunto1");
punto1.addEventListener("click", ejercicio1);

function ejercicio2() {
  let mensajePunto2 = document.getElementById("mensajePunto2");
  let mensajeArreglo2 = document.getElementById("mensajeArreglo2");
  let arreglo = "";
  let datos = "";
  let ciudades = [];
  let finalizar = true;

  do {
    let ciudad = prompt("Ingrese el Nombre de la ciudad");
    ciudades.push(ciudad);
    finalizar = confirm("¿Desea Ingresar otro dato mas?");
  } while (finalizar);

  datos += `La longitud del arreglo al comienzo de su ciclo es de ${ciudades.length}.<br>`;
  datos += `El elemento en la primera posicion es ${ciudades[0]}.<br>`;
  if (ciudades[2] == undefined) {
    datos += `El elemento en la tercera posicion no fue ingresado.<br>`;
  } else {
    datos += `El elemento en la tercera posicion es ${ciudades[2]}.<br>`;
  }
  datos += `El elemento en la ultima posicion es ${
    ciudades[ciudades.length - 1]
  }.<br>`;
  ciudades.push("Paris");
  datos += `Se agrega el elemento "Paris" al final.<br>`;
  datos += `El elemento que ocupa le segunda posicion es ${ciudades[1]} y sera reemplazado por "Barcelona".<br>`;
  ciudades[1] = "Barcelona";
  datos += `La longitud del arreglo al final de su ciclo es de ${ciudades.length}.<br>`;

  mensajePunto2.innerHTML = datos;

  arreglo += "<ul>";
  for (let i = 0; i < ciudades.length; i++) {
    arreglo += "<li>" + ciudades[i] + "</li>";
  }
  arreglo += "</ul>";

  mensajeArreglo2.innerHTML = arreglo;
}
let punto2 = document.getElementById("btnPunto2");
punto2.addEventListener("click", ejercicio2);

function ejercicio3() {
  let mensajePunto3 = document.getElementById("mensajePunto3");
  let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    switch (suma) {
      case 2:
        sumas[0]++;
        break;
      case 3:
        sumas[1]++;
        break;
      case 4:
        sumas[2]++;
        break;
      case 5:
        sumas[3]++;
        break;
      case 6:
        sumas[4]++;
        break;
      case 7:
        sumas[5]++;
        break;
      case 8:
        sumas[6]++;
        break;
      case 9:
        sumas[7]++;
        break;
      case 10:
        sumas[8]++;
        break;
      case 11:
        sumas[9]++;
        break;
      case 12:
        sumas[10]++;
        break;
      default:
        break;
    }
  }
  mensajePunto3.innerHTML = `<table>
  <tr><td>Suma</td><td>Apariciones</td></tr>
  <tr><td>2</td><td>${sumas[0]}</td></tr>
  <tr><td>3</td><td>${sumas[1]}</td></tr>
  <tr><td>4</td><td>${sumas[2]}</td></tr>
  <tr><td>5</td><td>${sumas[3]}</td></tr>
  <tr><td>6</td><td>${sumas[4]}</td></tr>
  <tr><td>7</td><td>${sumas[5]}</td></tr>
  <tr><td>8</td><td>${sumas[6]}</td></tr>
  <tr><td>9</td><td>${sumas[7]}</td></tr>
  <tr><td>10</td><td>${sumas[8]}</td></tr>
  <tr><td>11</td><td>${sumas[9]}</td></tr>
  <tr><td>12</td><td>${sumas[10]}</td></tr>
  </table>`;
}
let punto3 = document.getElementById("btnPunto3");
punto3.addEventListener("click", ejercicio3);

function ejercicio4() {
  let mensajePunto4 = document.getElementById("mensajePunto4");
  let numero = parseInt(prompt("Ingrese el numero a evaluar por favor"));

  if (numero === 0) {
    mensajePunto4.textContent = `El numero ${numero} es Cero`;
  } else if (numero % 2 == 0) {
    mensajePunto4.textContent = `El numero ${numero} es Par`;
  } else if (isNaN(numero)){
    mensajePunto4.textContent = `El dato ingresado no esta definido`;
  } else {
    mensajePunto4.textContent = `El numero ${numero} es Impar`;
  }
}
let punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);

function ejercicio5() {
  let mensajePunto5 = document.getElementById("mensajePunto5");
  let cadenaTexto = prompt("Ingrese el texto a evaluar");

  if (cadenaTexto === cadenaTexto.toUpperCase()) {
    mensajePunto5.textContent = `la cadena de texto "${cadenaTexto}" esta en Mayusculas`;
  } else if (cadenaTexto === cadenaTexto.toLocaleLowerCase()) {
    mensajePunto5.textContent = `la cadena de texto "${cadenaTexto}" esta en Minusculas`;
  } else {
    mensajePunto5.textContent = `la cadena de texto "${cadenaTexto}" es una mezcla de ambas`;
  }
}
let punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);

function ejercicio6() {
  let mensajePunto6 = document.getElementById("mensajePunto6");
  let base = parseInt(prompt("Ingrese la base del rectanculo: "));
  let altura = parseInt(prompt("Ingrese la altura del rectanculo: "));
  let perimetro = 2 * (base + altura);

  mensajePunto6.innerHTML = `P = 2 * (${base} + ${altura})<br>P = ${perimetro}`;
}
let punto6 = document.getElementById("btnPunto6");
punto6.addEventListener("click", ejercicio6);

function ejercicio7() {
  let mensajePunto7 = document.getElementById("mensajePunto7");
  let numero = parseInt(prompt("Ingrese el numero a estudiar: "));
  let mensajeFinal = "";

  for (let i = 1; i <= 10; i++) {
    mensajeFinal += numero + ` x ` + i + ` = ` + numero * i +`<br>`;
  }
  mensajePunto7.innerHTML = mensajeFinal;
}
let punto7 = document.getElementById("btnPunto7");
punto7.addEventListener("click", ejercicio7);