
function clique() {
    alert('Clicou mesmo hein')
    document.getElementById("textch").innerHTML= "Tudo bom?"
    // document.getElementById("textch").style.display = "none"
}

function clique2() {
    document.getElementById("textch").innerHTML= "Espero que sim"
}

function abrirCaixa() {
    document.getElementById("closedbox").src = "https://images.vexels.com/media/users/3/146451/isolated/lists/d03c9de18db226a823d5adb337782f89-caixa-aberta-com-sinais-de-pacote.png"
}

function fecharCaixa() {
    document.getElementById("closedbox").src = "https://images.vexels.com/media/users/3/146255/isolated/preview/9eacf7cedc0893ff8192c1db0e5c6326-caixa-fechada-com-sinais-de-pacote-by-vexels.png"
}

function ler() {
   for (var i = 0; i < document.getElementsByClassName("paragraph").length; i++){
        document.getElementsByClassName("paragraph")[i].style.color = "black";
   } 
}
 var quantidade = 0

function adicionar() {
    var elemento = document.createElement("E")
    elemento.innerHTML = "elemento" + quantidade
    quantidade++
    document.getElementById("divisinha").appendChild(elemento)
}

function remover() {
    var filhotes = document.getElementById("divisinha").childNodes
    for (var i = 0 ; i < filhotes.length; i++) {
        document.getElementById("divisinha").removeChild(filhotes[i])
    }
}