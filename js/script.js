function isValidForm() {
    const nome = document.getElementById("nome").value;
    const setor = document.getElementById("setor").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const descricao = document.getElementById("descricao").value;

    if (!isValidEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    if (!isValidPhone(telefone)) {
        alert("Por favor, insira um número de telefone válido com DDD e 9 dígitos.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(telefone) {
    // Validação para um número de telefone com DDD e 9 dígitos (xx xxxxx-xxxx).
    const phoneRegex = /^(\d{2})\s\d{5}-\d{4}$/;
    return phoneRegex.test(telefone);
}
function formatPhoneNumber(input) {
    // Remove todos os caracteres não numéricos do valor do campo.
    const phoneNumber = input.value.replace(/\D/g, '');

    // Formata o número de telefone com parenteses para o DDD e um traço.
    if (phoneNumber.length >= 2) {
        input.value = `(${phoneNumber.substring(0, 2)}`;
    }
    if (phoneNumber.length >= 7) {
        input.value = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-`;
    }
    if (phoneNumber.length >= 11) {
        input.value = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
    }
}
