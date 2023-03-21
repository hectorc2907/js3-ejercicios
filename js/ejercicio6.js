let base = parseInt(prompt("Ingrese el valor de Base"));
let altura = parseInt(prompt("Ingrese el valor de Altura"));

function perimetro(base,altura){
    p = 2*(base+altura);
    return p;
}

document.write("El perimetro del rectangulo es ",perimetro(base,altura));