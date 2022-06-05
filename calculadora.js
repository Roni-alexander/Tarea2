var resultado;
var GTabla = [];
var mensaje;

function calcular(){
    let nu1 = document.getElementById('num1').value;
    let nu2 = document. getElementById('num2').value;
    let operacion = document.getElementById('operacion').value;

    num1 = parseInt(nu1);
    num2 = parseInt(nu2);

    switch(operacion){
        case "Sumar":
            resultado =  num1 + num2;
            mensaje = num1+"+"+num2+
            "="+resultado+"";
            resp.value = mensaje;
            break;

            case "Restar":
            resultado =  num1 - num2;
            mensaje = num1+"+"+num2+
            "="+resultado+"";
            resp.value = mensaje;
            break;

            case "Multiplicar":
            resultado =  num1 * num2;
            mensaje = num1+"*"+num2+
            "="+resultado+"";
            resp.value = mensaje;
            break;

            case "Dividir":
            resultado =  num1 / num2;
            mensaje = num1+"/"+num2+
            "="+resultado+"";
            resp.value = mensaje;
            break;

            default:
              break;
    }
        guardar();
    
}


function guardar(){
    calc = {};
    calculo = document.getElementsByName('calcular');

    for (i in calculo){
        cl = calculo[i];
        calc[cl.id] = cl.value;
    }
    GTabla.push(calc);
    localStorage.setItem('intro', JSON.stringify(GTabla));
    mostrar();

}
function mostrar(){
    document.getElementById('calculo').innerHTML ='';
    for(i = 0; i < GTabla.length; i++){
        fila = GTabla[i];

        tr = document.createElement('tr');
        vln = document.getElementById('cal').value;
        vln = vln.replace('{operacion}', fila.operacion);
        vln = vln.replace('{Resultado}', fila.resp);
        tr.innerHTML = vln;
        document.getElementById('calculo').appendChild(tr);

    }
}
window.onload = function(){
    vln = localStorage.getItem('intro');
    if(vln !=null)
    GTabla = JSON.parse(vln);
    mostrar();
}
function eliminar(){
    calc = [];
    calculo = document.getElementsByName('calcular');
    document.getElementById('calculo').innerHTML='';
    for (i = 0; i < GTabla.length; i++){
        if(i != calculo){
            calc.push(GTabla[i]);
        }
    }
    GTabla = calc;
    localStorage.clear(GTabla);
}
function confirETodo(){
    comf = confirm("Esta seguro que desea eliminar los datos");
    if(comf == true){
        eliminar();
    }
}