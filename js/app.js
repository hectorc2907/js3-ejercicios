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