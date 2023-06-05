function media() {

    var nome = document.getElementById("aluno").value

    var senha = document.getElementById("nota1").value

    if (nome == "adm" && senha == "123") {
        document.getElementById("resultado").innerHTML =
            ` <b class="sim" >Parabéns ${nome}, você conseguiu acessar o sistema. </b>`
    } else {
        document.getElementById("resultado").innerHTML =
            ` <b class="nao" > Lamento ${nome}, senha ou usuário incorretos. </b>`
    }


}