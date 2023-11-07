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
