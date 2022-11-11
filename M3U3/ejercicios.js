

// Ejercicio 1



function distanceCheck(){
    var valor = document.getElementById("input1").value
    valor=parseInt(valor);
    var string=""

    if(valor<0){
        string=""
    } else if (valor<=1000){
        string="a pie";
    } else if(valor<=10000){
        string="en bicicleta";
    } else if(valor<=30000){
        string="en colectivo";
    } else if(valor<=100000){
        string="en auto";
    } else if(valor>100000){
        string="en avion";
    }else{
        string=""
    }

    if (string==""){
        document.getElementById("ej1").innerHTML=`No es posible calcular el valor ingresado:  ${valor} metros`;

    }else{
        document.getElementById("ej1").innerHTML=`Para recorrer ${valor} metros debe recorrerlo ${string}`;

    }
    
}

function mayorCheck(){
    let valores = document.getElementById("input2").value;
    const lista = valores.split(",");
    var mayor= -Infinity
    for (n in lista){
        let val=parseFloat(lista[n])
        if (mayor < val){
            mayor=val;
        }
    }
    document.getElementById("ej2").innerHTML=`El mayor de la lista es: ${mayor}`;
    



    
}