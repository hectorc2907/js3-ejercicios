function texto(cadena){
    if(cadena === cadena.toUpperCase()){
        resultado = "La cadena \""+cadena+"\" esta formada por Mayusculas";
    }else if(cadena === cadena.toLowerCase()){
        resultado = "La cadena \""+cadena+"\" esta formada por Minusculas";
    }else{
        resultado = "La cadena \""+cadena+"\" esta formada por una combinacion de Minusculas y Mayusculas";
    }
    return resultado;
}

document.write(texto(prompt("Ingrese la cadena de texto")));