function calcular(base,altura){
    //let para variable de ambito local (recomendado)
    //var para ambito global

    //constante: valor que una vez asignado nunca cambia
    const area=base*altura;
    const perimetro=2*(base+altura);

    //valore que retorna la funcion a quien la llama
    return [area, perimetro];
}

function calcular_hipotenusa(a, b){
    //math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+b**2);
    return hipotenusa;
}

function calculadora(a,b){
    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);

}

function media(){

    //alert(), prompt(): Usarla con precaución    
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');

    //Casting: Transformar de manera explícita el tipo
    //de dato de una variable en js 
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= (x+y+z)/3;
    console.log(promedio);
    return promedio;
    
}

function calcular_tiempo(){
    
    let v1= parseInt(document.getElementById("x").value);
    let v2= parseInt(document.getElementById("y").value);
    let d= parseInt(document.getElementById("z").value);

    let t=d/(v1-v2);
    let tf=t*60

    let resultado= document.getElementById("resultado");
    resultado.value= tf;
    return tf;
}
 //funcion utilizada en este algoritmo
 
function notas(){

    let notadelParcialUno = parseFloat(document.getElementById("notadelParcialUno").value);
    let notadelParcialDos = parseFloat(document.getElementById("notadelParcialDos").value);
    let notadelParcialTres = parseFloat(document.getElementById("notadelParcialTres").value);
    let notadelExamen = parseFloat(document.getElementById("notadelExamen").value);
    let notadelTrabajo = parseFloat(document.getElementById("notadelParcialTres").value);
    let notaParcial=(notadelParcialUno+notadelParcialDos+notadelParcialTres)/3;
    let notaFinal =(notaParcial*0.55)+(notadelExamen*0.3)+(notadelTrabajo*0.15);

    console.log(notaFinal);
    return notaFinal;
}
