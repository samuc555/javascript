//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando o dados de um vetor
console.log( nomes[1] )
console.log(novoVetor[1])

//Verificando o tamanho de um vetor
console.log(numeros.length)

//Indice        0         1        2         3        4
var frutas = ['Maçã', 'Laranja', 'Pêra', 'Morango', 'Uva']
//Faço um for para percorrer todo o tamanho do vetor
for (var i=0; i < frutas.length; i++) {
    //coloco o i no índice da fruta para pegar o valor de cada índice do vetor
    console.log ( frutas [i])
}

//Adicionando novo valor no FINAL do vetor
frutas.push('Abacaxi')
console.log ( frutas.length )
console.log( frutas )

var novaListaFrutas = []
novaListaFrutas.push ('Limão')
console.log (novaListaFrutas) // ['Limão]
novaListaFrutas.push ('Melância')
console.log (novaListaFrutas) // ['Limão', 'Melancia']

console.log(novaListaFrutas[0]) // 'Limão'

novaListaFrutas[0] = 'Melão'
console.log(novaListaFrutas) // ['Melão', 'Melancia']
novaListaFrutas[1] = 'Banana'
console.log(novaListaFrutas) // ['Melão', 'Banana']

novaListaFrutas.push ('Melância')
console.log (novaListaFrutas) // ['Limão', 'Banana', 'Melancia']


for (var i=0; i < frutas.length; i++) {
    console.log ( frutas [i])
}

// for in -> não preciso inicializar uma variável de contador de loop
for (var indice in novaListaFrutas) {
    console.log (novaListaFrutas[indice])
}

// Método forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach(fruta => {
    console.log (fruta)
} )

/* O método forEach - significa para cada item do vetor
dentro do parênteses colocamos a variável que irá
receber o conteúdo de cada linha do vetor
e com o => {} informamos o bloco que irá executar para
cada linha */
frutas.forEach ( item => { 
    console.log ('Item pelo forEach', item)
 } )

/* Quando precisamos do índice também o colocamos entre
assim como no exemplo abaixo */
 frutas.forEach ( (item, pos) => { 
    console.log ('Item pelo forEach com posição', pos, item)
 } )