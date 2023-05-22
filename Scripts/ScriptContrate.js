$(document).ready(function() {
    $('#phone').inputmask('(99) 9999-9999[9]', { greedy: false });
});

function enviarbtn() {
    document.getElementById('fomulario').innerHTML= '<h1>Obrigado pela sua solicitação! Nossa equipe já foi informada e em breve entraremos em contato com você. Agradecemos sua paciência e estamos ansiosos para ajudá-lo.</h1>'
}