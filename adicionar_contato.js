document.addEventListener('DOMContentLoaded', function() {
    const contactList = document.getElementById('contact-list');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addButton = document.getElementById('add');

    addButton.addEventListener('click', function() {
        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name && phone) {
            addContact(name, phone);
            nameInput.value = '';
            phoneInput.value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function addContact(name, phone) {
        const contact = document.createElement('div');
        contact.classList.add('contact');

        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');

        const contactName = document.createElement('h3');
        contactName.textContent = name;

        const contactPhone = document.createElement('p');
        contactPhone.textContent = phone;

        contactInfo.appendChild(contactName);
        contactInfo.appendChild(contactPhone);

        const icons = document.createElement('div');
        icons.classList.add('icon');

        const callIcon = document.createElement('i');
        callIcon.classList.add('bi', 'bi-telephone-outbound-fill', 'icon-spacing');
        callIcon.addEventListener('click', function() {
            window.location.href = 'tel:' + phone;
        });

        const whatsappIcon = document.createElement('i');
        whatsappIcon.classList.add('bi', 'bi-whatsapp', 'icon-spacing');
        whatsappIcon.addEventListener('click', function() {
            window.open('https://api.whatsapp.com/send?phone=' + phone, '_blank');
        });

        const editIcon = document.createElement('i');
        editIcon.classList.add('bi', 'bi-pencil-fill', 'icon-spacing');
        editIcon.addEventListener('click', function() {
            editContact(contact, name, phone);
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('bi', 'bi-trash-fill');
        deleteIcon.addEventListener('click', function() {
            deleteContact(contact);
        });

        icons.appendChild(callIcon);
        icons.appendChild(whatsappIcon);
        icons.appendChild(editIcon);
        icons.appendChild(deleteIcon);

        contact.appendChild(contactInfo);
        contact.appendChild(icons);

        contactList.appendChild(contact);
    }

    function editContact(contact, name, phone) {
        const newName = prompt('Novo nome:', name);
        const newPhone = prompt('Novo telefone:', phone);

        if (newName !== null && newPhone !== null) {
            const contactName = contact.querySelector('h3');
            const contactPhone = contact.querySelector('p');

            contactName.textContent = newName;
            contactPhone.textContent = newPhone;
        }
    }

    function deleteContact(contact) {
        const confirmDelete = confirm('Tem certeza de que deseja excluir este contato?');

        if (confirmDelete) {
            contact.remove();
        }
    }

});
