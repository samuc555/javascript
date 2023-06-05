function media() {

    var nome = document.getElementById("aluno").value

    var idade = Number(document.getElementById("nota1").value)

    if (idade >= 18 && idade <= 70) {
        document.getElementById("resultado").innerHTML =
            ` <b class="sim"> ${nome} você é maior de 18 anos e é obrigado a votar.
            <br> </b>`

    } else if (idade > 16 || idade > 70) {
        document.getElementById("resultado").innerHTML =
            ` <b class="sim"> ${nome} você não é obrigado a votar.
            <br> </b>`
    } else if (idade < 16) {
        document.getElementById("resultado").innerHTML =
            ` <b class="nao">Lamento ${nome}, você é menor de 16 anos e não pode votar</b>`

    }

}