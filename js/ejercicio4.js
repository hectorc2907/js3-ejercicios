function tipo(numero){
    if(numero%2 == 0){
        resultado = `${numero} es un numero Par`;
    }else{
        resultado = `${numero} es un numero Impar`;
    }
    return resultado;
}

document.write(tipo(parseInt(prompt("Ingrese un Numero"))));