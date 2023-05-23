$(document).ready(function () {
    $('#phone').inputmask('(99) 9999-9999[9]', { greedy: false });
});

function enviarbtn() {

    var formValid = true;

    // Verifica cada campo do formulário
    $('form input, form textarea').each(function () {
        if ($(this).val() === '') {
            formValid = false;
            $(this).css('background-color', 'lightcoral');
        } else {
            $(this).css('background-color', '');
        }
    });

    if (!formValid) {
        document.getElementById('fomulario').innerHTML += '<p class="redcl">Por favor, preencha todos os campos obrigatórios.</p>'
        return false; // Impede o envio do formulário se houver campos vazios
    } else {
        document.getElementById('fomulario').innerHTML = '<h1>Obrigado pela sua solicitação! Nossa equipe já foi informada e em breve entraremos em contato com você. Agradecemos sua paciência e estamos ansiosos para ajudá-lo.</h1>'
    }



}