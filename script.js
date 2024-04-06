function calcularBhaskara (){
    const a = parseFloat(document.getElementById("CoeficienteA").value);
    const b = parseFloat(document.getElementById("CoeficienteB").value);
    const c = parseFloat(document.getElementById("CoeficienteC").value);

    const  delta = b * b - 4 * a * c;

    let resultado = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        resultado = "Insira apenas números";
    } else if (delta > 0){
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado = `Delta é ${delta}, Raiz 1: ${x1}, Raiz 2: ${x2}`;
    } else if (delta < 0){
        const x2 = -b / (2 * a);
        resultado = `Delta é ${delta}, Raiz única: ${x2}`;
    } else {
        resultado = "Não há raízes reais, apenas imaginárias";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
