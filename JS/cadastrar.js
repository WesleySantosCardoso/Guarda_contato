function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var possuiCadastro = document.querySelector('input[name="cadastro"]:checked');
    var cpf = document.getElementById("cpf").value;
    var celular = document.getElementById("celular").value;

    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expressões regulares para validar CPF e celular
    var cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    var celularRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;


    if (!emailRegex.test(usuario)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido!");
        return false;
    }

    if (!celularRegex.test(celular)) {
        alert("Número de celular inválido!");
        return false;
    }

    return true;
}