

function media() {
    var aluno = document.getElementById("aluno").value
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)

    if (validarNotas(nota1, nota2) == false) {
        return
    }
        
    
    var media = calcularMedia(nota1, nota2)
    
    exibirAprovacao(media)
}

function validarNotas (nota1, nota2) {
    if (nota1 > 10) {
        alert("A nota máxima deve ser 10.")
        return false
    }

    if (nota2 > 10) {
        alert("A nota máxima deve ser 10.")
        return false
    }
}

function calcularMedia (nota1, nota2) {
    var media = (nota1 + nota2) / 2
    return media
}

function exibirAprovacao (media) {
    if (media >= 7) {
        document.getElementById("resultado").innerHTML =
            //Exibir resultado aprovado
            `O aluno ${aluno} teve sua média de ${media}
    <br><strong>PASSOU DE ANO</strong>`
    } else {
        //Exibir resultado reprovado
        document.getElementById("resultado").innerHTML =
            `O aluno ${aluno} teve sua média de ${media}
    <br><strong>REPROVOU</strong>`
    }
}