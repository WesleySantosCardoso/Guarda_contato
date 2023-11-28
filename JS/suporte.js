function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var telefone = document.getElementById("telefone").value;

    if (usuario.trim() === "" || telefone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}

function enviarMensagem() {
    if (validarFormulario()) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contatoForm").reset();
    }
}
