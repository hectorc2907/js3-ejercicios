let ciudades = [];

while(confirm("desea agregar una ciudad?") == true){
    ciudades.push(prompt("Ingrese la ciudad"));
}
document.write("El Arreglo de ciudades tiene ",ciudades.length," elementos<br><br>");

document.write("<li>Elemento 1er Posicion: ",ciudades[0],"</li>");
document.write("<li>Elemento 3ra Posicion: ",ciudades[2],"</li>");
document.write("<li>Elemento ultima posicion ",ciudades[ciudades.length-1],"</li><br>");

ciudades.push("París");
document.write("<li>Elemento ultima posicion ",ciudades[ciudades.length-1],"</li>");

ciudades.splice(1,0,"Barcelona");

document.write("<h1>Arreglo de ciudades</h1>");

for(let i = 0; i < ciudades.length; i++){
    document.write("<li>Elemento: ", ciudades[i],"</li>");
}