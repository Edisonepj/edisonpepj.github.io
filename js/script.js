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
