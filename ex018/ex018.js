
function sortear() {
    document.getElementById("resultado").innerHTML = ""

    var num = Number(document.getElementById("num").value)
    
    for (var contador = 1; contador <= num; contador ++) {
        document.getElementById("resultado").innerHTML +=
        `<img class="img" src="https://th.bing.com/th/id/OIP.9cnX9RuMYdIfctuysNRxMwAAAA?pid=ImgDet&rs=1" alt="">`
        
    }
    
}

