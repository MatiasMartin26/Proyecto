//console.log("a=",a ,"b=",b)
//document.write()

var a = 2
var b = 2
console.log("Rick=",2)

if(a>1.5) {
    console.log("Positivo alcohol en sangre")}
    
else{
    console.log("Negativo")

}



//Calificaciones 
//prompt("Ingrese calificacion")
//console.log(La nota final es" ,nota)

var nota = 6

if(nota>0 && nota<=10){

    if (nota>0 && nota<4){
    document.write("Failed")
    console.log("La nota final es" ,nota)
}

    else if(nota>=4 && nota<=7){
    document.write("Good")
    console.log("La nota final es" ,nota)
}

    else if(nota<=9){
    document.write("Very Good")
    console.log("La nota final es" ,nota)
}

    else if(nota==10){
    document.write("Excelent")
    console.log("La nota final es" ,nota)
}
} else{
document.write("Error")
}


////////////////////

var nota = 7;
console.log("La calificacion es:" + nota);
// Condición
if (nota < 5) {
 // Acción A (nota es menor que 5)
 calificacion = "suspendido";
} else {
 // Acción B: (nota es mayor o igual que 5)
 calificacion = "aprobado";
}
console.log("Estoy", calificacion);


var calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Por lo tanto, estoy", calificacion);


//////////////////////