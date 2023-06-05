var time1 = 0
var time2 = 0
var time1bas = 0
var time2bas = 0 



    
function botao1() {
    time1 ++
    document.getElementById("h1time1").innerHTML =
    `${time1}`
}

function botao2() {
    time2 ++
    document.getElementById("h1time2").innerHTML =
    `${time2}`
}

function botao1bas() {
    time1bas ++
    document.getElementById("h1time1bas").innerHTML =
    `${time1bas}`
}

function botao2bas() {VC
    time1bas += 2
    document.getElementById("h1time1bas").innerHTML =`${time1bas} ` 
}

function botao3bas() {
    time1bas += 3
    document.getElementById("h1time1bas").innerHTML =`${time1bas} ` 
}

function botao4bas() {
    time2bas ++ 
    document.getElementById("h1time2bas").innerHTML =
    `${time2bas}`
}

function botao5bas() {
    time2bas += 2
    document.getElementById("h1time2bas").innerHTML =`${time2bas} ` 
}

function botao6bas() {
    time2bas += 3
    document.getElementById("h1time2bas").innerHTML =`${time2bas} ` 
}