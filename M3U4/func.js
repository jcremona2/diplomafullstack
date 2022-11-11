function cambiaColor(color){
    document.body.style.backgroundColor=color
}

function palabraCount(){
    let palabras = document.getElementById("input2").value
    document.getElementById("cantidadPal").innerHTML=`Cantidad de caracteres : ${palabras.length}`
}

function examCheck(){
    var alumnos =[
        {"nombre":"Juan Gomez","nota":7},
        {"nombre":"Pedro Rodriguez","nota":4},
        {"nombre":"Roxana García","nota":8},
        {"nombre":"Luciano Lopez","nota":5},
        {"nombre":"Fernanda Gimenez","nota":6},
        {"nombre":"Florencia Martinez","nota":10},
        {"nombre":"Raul Sanchez","nota":7},
        {"nombre":"Sandra Figueroa","nota":8}];
        
    aprobados=[]
    for (a in alumnos){
        if (alumnos[a].nota>=7){
            aprobados.push(alumnos[a].nombre)
        }

    } 
    alert(`Alumnos aprobados: \n\n${aprobados.join("\n")}`)

}