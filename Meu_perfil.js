function changeProfilePicture() {
    var fileInput = document.getElementById('profile-picture-input');
    var image = document.getElementById('profile-picture');
    var changeButton = document.getElementById('change-button');

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        image.src = e.target.result;
        changeButton.textContent = 'Alterar Foto';
        fileInputLabel.style.display = 'none';
    }

    reader.readAsDataURL(file);
}

function changeUsername() {
    var newUsername = prompt('Novo nome de usuário:');
    if (newUsername !== null && newUsername !== '') {
        document.getElementById('username').textContent = newUsername;
    }
}

function changeUsername() {
    var username = prompt('Digite o novo nome de usuário:');
    if (username !== null && username !== "") {
        document.getElementById('username').textContent = username;
        document.body.style.background = 'linear-gradient(to right, #ff9966, #007bff)'; // Adição: Mudança de cor de fundo para um degradê azul claro
    }
}

