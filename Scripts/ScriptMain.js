function rolarsolu() {
    window.scroll({
        top: 600,
        behavior: "smooth",
    });
}

function pgpr() {
    window.location.href='index.html'
}

// SCRIPT DIREITOS DA PÁGINA
function direitopg() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    var txt = `Todos os direitos reservados &copy; ${anoAtual} - MotaSoluTec`
    document.getElementById('direitospg').innerHTML = txt
}
direitopg()