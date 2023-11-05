document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const setor = document.getElementById("setor").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const descricao = document.getElementById("descricao").value;

        if (!isValidEmail(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        if (!isValidPhone(telefone)) {
            alert("Por favor, insira um número de telefone válido com DDD e 9 dígitos.");
            return;
        }

        alert("Formulário enviado com sucesso!");
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(telefone) {
        // Remove todos os caracteres não numéricos do valor do campo.
        const phoneNumber = telefone.replace(/\D/g, '');

        // Verifica se o número de telefone tem 11 dígitos, incluindo DDD.
        return phoneNumber.length === 11;
    }
});
