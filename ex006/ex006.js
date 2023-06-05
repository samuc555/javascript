function botaoCalc() {
    //Receber os números
    var numero1 = Number(document.getElementById("numero1").value)
    var numero2 = Number(document.getElementById("numero2").value)

    //Obtendo as variantes 
    //variante de soma
    var soma = (numero1 + numero2)
    //variante de subtração
    var subt = (numero1 - numero2)
    //variante de multiplicação
    var mult = (numero1 * numero2)
    //variante de divisão
    var divi = (numero1 / numero2)
    //variante de sobra da divisão
    var rest = (numero1 % numero2)
    //variante de exponenciação
    var expo = (numero1 ** numero2)

    //Exibindo os resultados
    document.getElementById("resul").innerHTML =
        `
    <br> ${numero1} + ${numero2} = ${soma}
    <br> ${numero1} - ${numero2} = ${subt}
    <br> ${numero1} * ${numero2} = ${mult}
    <br> ${numero1} / ${numero2} = ${divi}
    <br> ${numero1} % ${numero2} = ${rest}
    <br> ${numero1} ** ${numero2} = ${expo}
    `
}