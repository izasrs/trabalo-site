var Placar = document.getElementById('pontos')
pontos = Number(localStorage.getItem('pontos')) || 0
Placar.innerText = `PONTOS: ${pontos}`

function altCertas(src) {
    pontos += 10

    document.getElementById('alt1').style.backgroundColor = "#00ff00"

    document.getElementById('titulo').style.backgroundColor = "#00ff00"

    Placar.innerText = `PONTOS: ${pontos}`
    localStorage.setItem('pontos', pontos)
    trocarPag(src)

}

function altErrada(ctx, src) {

    ctx.style.backgroundColor = "#ff0000";

    document.getElementById('titulo').style.backgroundColor = "#ff0000"

    trocarPag(src);
}

function trocarPag(src) {

    setTimeout(function mudar() {

        window.location.href = src
        
    }, 2000)

}


