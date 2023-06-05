var vida = 5

function desenharVidas() {
    document.getElementById("resultado").innerHTML = ""
    for (var contador = 1; contador <= vida; contador++) {
        document.getElementById("resultado").innerHTML +=
            `<img class="img" src="https://th.bing.com/th/id/OIP.9cnX9RuMYdIfctuysNRxMwAAAA?pid=ImgDet&rs=1" alt="">`
    }
}

function adicionarVida() { //cogumelo
    vida++
    desenharVidas()
}

function removerVida() {//bomba
    vida--
    desenharVidas()
}



if (vida <= 0) {
    document.getElementById("gameOver").innerHTML =
        `<img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c846b9a-1cee-46bf-8736-521d8272f9dc/d8mwdoe-acf7dda8-a086-4787-91d0-d7bb8d2fffa6.png/v1/fill/w_549,h_427,q_80,strp/mario_sad_2_by_princesspuccadominyo_d8mwdoe-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvOGM4NDZiOWEtMWNlZS00NmJmLTg3MzYtNTIxZDgyNzJmOWRjXC9kOG13ZG9lLWFjZjdkZGE4LWEwODYtNDc4Ny05MWQwLWQ3YmI4ZDJmZmZhNi5wbmciLCJ3aWR0aCI6Ijw9NTQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uX_Pl8KYnZtI79sXbUChItSEYi3nVFDVyhVTuBbmBJc" alt="">
        <br> <h2>GAME OVER</h2>`
}


