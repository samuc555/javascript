var vetorFilmes = []
var i = 0

function cadastrarFilmes() {
    vetorFilmes.push(document.getElementById("film").value)
    
    if (i < vetorFilmes.length){
        document.getElementById("resultado").innerHTML +=
            `<b><br>${vetorFilmes[i]}<br></b>`
            i++
    }

}

