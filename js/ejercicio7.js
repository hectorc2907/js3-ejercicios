function tabla(numero){
    for(let i = 1; i <= 10; i++){
        document.write("<li>",numero," x ",i," = ",numero*i,"</li>");
    }
}

tabla(parseInt(prompt("Ingrese el numero a comprobar")));