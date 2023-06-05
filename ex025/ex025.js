var logins = []
logins = JSON.parse(localStorage.getItem('usuarios'))
if (logins == null) {
    logins = []
}

exibirUsuarios()

function cadastrar() {
    var nome = document.getElementById('nome').value
    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var senha2 = document.getElementById('confirmarSenha').value

    if (nome == "" || usuario == "" || senha == "") {
        alert("Preencha todos os campos.")
        exit
    }

    if (senha != senha2) {
        alert("As senhas não batem.")
        exit
    }

    var objetoUsuario = {
        nome: nome,
        usuario: usuario,
        senha: senha
    }

    logins.push(objetoUsuario)
    localStorage.setItem('usuarios', JSON.stringify(logins))

    exibirUsuarios()
}

function exibirUsuarios() {
    document.getElementById('resultado').innerHTML = ""

    logins.forEach((item, pos) => {
        document.getElementById('resultado').innerHTML +=
            `<b> Nome: </b> ${item.nome} - <b> Login: </b>${item.usuario} <img class="excluir" src="excluir.svg" onclick="excluirUsuario(${pos})"> <br><br>`
    })
    
}

function excluirUsuario(pos) {
    var confirmarExclusao = confirm('Deseja realmente excluir este usuário?')
    if (confirmarExclusao == true){
        logins.splice(pos, 1)
        localStorage.setItem('usuarios', JSON.stringify(logins))
        exibirUsuarios()
    }
    

}

function login() {

    var loginUser = document.getElementById("loginUser").value
    var loginSenha = document.getElementById("loginSenha").value
    var encontrado = false

    //for (var i in logins) {
    logins.forEach(item => {
        if (loginUser == item.usuario && loginSenha == item.senha) {
            document.getElementById("resultado2").innerHTML =
                `<b id="bverde"> Parabéns! Você acessou o sistema </b>`
            encontrado = true
            exit
        }
    })
    
    alert("Usuario ou senha incorretos")
}



