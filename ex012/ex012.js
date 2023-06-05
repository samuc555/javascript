var num = Number(parseInt(Math.random() * 100) + 1)
var tentativas = 0



function chutar() {
    
    var chute = Number(prompt("Tente adivinhar o número que pensei"))

    tentativas ++ 
    
    if (chute < num) {
        document.getElementById("resultado").innerHTML +=
        `<br>Você chutou ${chute} e eu pensei em um número MAIOR`
    } else if (chute > num) {
        document.getElementById("resultado").innerHTML +=
        `<br>Você chutou ${chute} e eu pensei em um número MENOR`
    } else if (chute == num) {
        document.getElementById("resultado").innerHTML +=
        `<br> <b> PARABÉNS, VOCÊ ACERTOU O NÚMERO ${num} EM ${tentativas} TENTATIVAS </b>`
    }
}

function novo() {
    tentativas = 0
    num = Number(parseInt(Math.random() * 100) + 1)
    document.getElementById("resultado").innerHTML =
        ``

}

