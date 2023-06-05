var listaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto é declarado com { }
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}

//Para exibir o atributo do objeto faço da seguinte forma objeto.atributo
console.log(carro.modelo +  ' - ' + carro.ano)
console.log(`${carro.modelo} - ${carro.ano}`)

//Adicionando o objeto carros ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros) // 1 - Só existe 1 item

//novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}

//Adicionando novo objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log (listaCarros)

for (var andar in listaCarros) {
    console.log ( listaCarros[andar].modelo )
}