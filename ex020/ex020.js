var vetorFilmes = ['Vingadores a Era de Cultron', 'Vingadores Eutemeto', 'Exterminador do Teufuro', 'Analconda', 'Invocação do Pau']

function exibirFilmes() {
    document.getElementById("p").innerHTML =
    ""
    for (var i = 0; i < vetorFilmes.length; i++) {

        document.getElementById("p").innerHTML +=
            `<b><br>Posição no vetor ${i} - Filme ${vetorFilmes[i]}<br></b>`
    }
}

