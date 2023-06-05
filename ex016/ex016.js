function botaoCalc() {
    document.getElementById("resul").innerHTML = ""
    
    var numero1 = Number(document.getElementById("numero1").value)

    for (var cont = 1; cont <= 10; cont++) {
        var resul = (numero1 * cont)

        document.getElementById("resul").innerHTML +=
            `<br> ${numero1} x ${cont} = ${resul}`
    }

}