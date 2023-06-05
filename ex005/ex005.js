function botaoCalc() {
    //Entrada
    var numero = document.getElementById("numero").value
    //Processamento
    var dobro = Number(numero*2) 
    var metade = Number(numero/2)
    //Saída
    document.getElementById("resul").innerHTML +=
    `<br> O dobro de ${numero} é <strong>${dobro}</strong> e sua metade é <strong>${metade}</strong>` 
}

function botaoLimp(){
    document.getElementById("resul").innerHTML = ""
}