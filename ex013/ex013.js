

function casar() {
    var nome = document.getElementById("nome").value
    
    var num = (parseInt(Math.random() * 13) + 1)

    switch (num) {
        case 1:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de janeiro`
            break

        case 2:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de fevereiro`
            break

        case 3:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de março`
            break

        case 4:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de abril`
            break

        case 5:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de maio`
            break

        case 6:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de junho`
            break

        case 7:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de julho`
            break

        case 8:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de agosto`
            break

        case 9:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de setembro`
            break

        case 10:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de outubro`
            break

        case 11:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de novembro`
            break

        case 12:
            document.getElementById("resultado").innerHTML =
                `${nome}, você vai se casar no mês de dezembro`
            break

        default:
            document.getElementById("resultado").innerHTML =
                `${nome}, você não vai se casar`
    }
}