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
            return false;
        }

        if (!isValidPhone(telefone)) {
            alert("Por favor, insira um número de telefone válido no formato (xx) xxxxx-xxxx.");
            return false;
        }

        alert("Formulário enviado com sucesso!");
        return true;
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(telefone) {
        // Validação para um número de telefone no formato (xx) xxxxx-xxxx.
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return phoneRegex.test(telefone);
    }

    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function() {
        const input = this;
        const inputValue = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (inputValue.length >= 2) {
            input.value = `(${inputValue.slice(0, 2)}`;
        }
        if (inputValue.length >= 7) {
            input.value = `(${inputValue.slice(0, 2)}) ${inputValue.slice(2, 7)}`;
        }
        if (inputValue.length >= 11) {
            input.value = `(${inputValue.slice(0, 2)}) ${inputValue.slice(2, 7)}-${inputValue.slice(7, 11)}`;
        }
    });
});
