function copiarem() {
    var botao = document.getElementById("botbanner");
    var email = 'motasolutec.trabalheaqui@gmail.com';

    navigator.clipboard.writeText(email);
    botao.innerHTML = 'Copiado';

    setTimeout(function() {
        botao.innerHTML = 'Copiar E-mail';
    }, 500);
}