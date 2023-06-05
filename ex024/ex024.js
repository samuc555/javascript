var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirFilmesVetor()
console.log(listaFilmes)

function botaoFilmes() {
    var filmes = document.getElementById("nome").value
    var foto = document.getElementById("imagem").value
    
    var objetoFilme = {
        nome: filmes,
        link: foto
    }

    listaFilmes.push(objetoFilme)
    /* Utilizando o localStorage que irá gravar o nosso vetor de filmes
    no método setItem, preciso passar como parâmetro o nome do espaço
    que o navegador irá reservar e passo também o vetor de filmes 
    convertido em formato JSON */
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    
    exibirFilmesVetor()
    
    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado() {
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML =
        `<div>
            <img src='${listaFilmes[nrSorteado].link}' class='img'> 
            <p>${listaFilmes[nrSorteado].nome}<p>
        </div>`
}

function exibirFilmesVetor() {
    document.getElementById('resultado').innerHTML = ''

    for (var i in listaFilmes) {
        //for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `<div><img src='${listaFilmes[i].link}' class='img'> <p>${listaFilmes[i].nome}<p><div>`
    }
}

function limpar()
{
    listaFilmes = []
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmesVetor()
}