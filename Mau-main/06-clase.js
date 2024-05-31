
function simpleE1() {
    tanteadorE1.innerHTML = Number(tanteadorE1.innerHTML) + 1;
    actualizarResultados();
}

function dobleE1() {
    tanteadorE1.innerHTML = Number(tanteadorE1.innerHTML) + 2;
    actualizarResultados();
}
function tripleE1() {
    tanteadorE1.innerHTML = Number(tanteadorE1.innerHTML) + 3;
    actualizarResultados();
}
function retrocesoE1() {
   
    if (Number (tanteadorE1.innerHTML) > 0) {tanteadorE1.innerHTML = Number (tanteadorE1.innerHTML) - 1}
    actualizarResultados();


}

let tanteadorE1 = document.getElementById("tanteadorE1")

function simpleE2() {
    tanteadorE2.innerHTML = Number(tanteadorE2.innerHTML) + 1;
    actualizarResultados();
}

function dobleE2() {
    tanteadorE2.innerHTML = Number(tanteadorE2.innerHTML) + 2;
    actualizarResultados();
}
function tripleE2() {
    tanteadorE2.innerHTML = Number(tanteadorE2.innerHTML) + 3;
    actualizarResultados();
}
function retrocesoE2() {
    if (Number (tanteadorE2.innerHTML) > 0) {tanteadorE2.innerHTML = Number (tanteadorE2.innerHTML) - 1;
        actualizarResultados();
    }



}

function actualizarResultados() {
    let resultadoE1 = Number(tanteadorE1.innerHTML);
    let resultadoE2 = Number(tanteadorE2.innerHTML);
    let resultadoTotal = resultadoE1 + ' - ' + resultadoE2;
    document.getElementById("resultado").innerHTML = resultadoTotal;
}
