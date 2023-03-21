let valores = [];
let c2 = 0 ,c3 = 0,c4 = 0,c5 = 0,c6 = 0,c7 = 0,c8 = 0,c9 = 0,c10 = 0,c11 = 0,c12 = 0;

for(let i = 0; i < 50; i++){
    let number1 = parseInt(Math.floor(Math.random() * 6)+1);
    let number2 = parseInt(Math.floor(Math.random() * 6)+1);
    let suma = number1 + number2;
    valores.push(suma);
}
for(let j = 0; j < valores.length; j++){
    switch(valores[j]){
        case 2:
            c2++;
        break;
        case 3:
            c3++;
        break;
        case 4:
            c4++;
        break;
        case 5:
            c5++;
        break;
        case 6:
            c6++;
        break;
        case 7:
            c7++;
        break;
        case 8:
            c8++;
        break;
        case 9:
            c9++;
        break;
        case 10:
            c10++;
        break;
        case 11:
            c11++;
        break;
        case 12:
            c12++;
        break;
        default:
        break;
    }
}
document.write("<table><tbody>");
document.write("<tr><td>Suma</td><td>Apariciones</td></tr>");
document.write("<tr><td>2</td><td>",c2,"</td></tr>");
document.write("<tr><td>3</td><td>",c3,"</td></tr>");
document.write("<tr><td>4</td><td>",c4,"</td></tr>");
document.write("<tr><td>5</td><td>",c5,"</td></tr>");
document.write("<tr><td>6</td><td>",c6,"</td></tr>");
document.write("<tr><td>7</td><td>",c7,"</td></tr>");
document.write("<tr><td>8</td><td>",c8,"</td></tr>");
document.write("<tr><td>9</td><td>",c9,"</td></tr>");
document.write("<tr><td>10</td><td>",c10,"</td></tr>");
document.write("<tr><td>11</td><td>",c11,"</td></tr>");
document.write("<tr><td>12</td><td>",c12,"</td></tr>");
document.write("</tbody></table>");