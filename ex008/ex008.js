

function media() {
    //Receber o nome do aluno
    var aluno = document.getElementById("aluno").value
    //Receber a nota 1
    var nota1 = Number(document.getElementById("nota1").value)
    //Receber a nota 2
    var nota2 = Number(document.getElementById("nota2").value)
    //calcular a média
    //(nota1 + nota2 / 2)
    var media1 = (nota1 + nota2) / 2

    if (nota1 > 10) {
        alert("A nota máxima deve ser 10.")
        exit
    }

    if (nota2 > 10) {
        alert("A nota máxima deve ser 10.")
        exit
    }

    //Se a média é maior ou igual a 7
    if (media1 >= 7) {
        document.getElementById("resultado").innerHTML =
            //Exibir resultado aprovado
            `O aluno ${aluno} tirou nota ${nota1} e ${nota2} e sua média foi ${media1}
    <br><strong>PASSOU DE ANO</strong>`
    } else {
        //Exibir resultado reprovado
        document.getElementById("resultado").innerHTML =
            `O aluno ${aluno} tirou nota ${nota1} e ${nota2} e sua média foi ${media1}
    <br><strong>REPROVOU</strong>`
    }


}