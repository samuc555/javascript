function botaoCalc() {
    document.getElementById("resul").innerHTML = ""
    var ate = Number(document.getElementById("ate").value)
    for (var cont = Number(document.getElementById("de").value); cont <= ate; cont++) {
        var resul = (1 * cont)
        
        if (resul % 2 != 0) {
            document.getElementById("resul").innerHTML +=
                `<br> ${resul} `
        }

    }

}