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

    if (usuario == "" || password == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}