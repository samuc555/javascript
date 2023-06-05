function media() {

    var nome = document.getElementById("aluno").value

    var idade = Number(document.getElementById("nota1").value)

    if (idade >= 18) {
        document.getElementById("resultado").innerHTML =
            ` Parabéns ${nome}, você é maior de 18 anos e <b class="sim">PODE</b> tirar a CNH.
            <br> <img src="https://www.karvi.com.br/blog/wp-content/uploads/2020/10/CNH-simulacao-versao-digital-1024x592.jpg" alt="">`
    } else {
        document.getElementById("resultado").innerHTML =
            ` Lamento ${nome}, você é menor de 18 anos e <b class="nao">NÃO PODE</b> tirar a CNH.`
    }


}