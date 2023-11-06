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
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return phoneRegex.test(telefone);
    }

    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function() {
        let input = this;
        let inputValue = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (inputValue.length > 11) {
            inputValue = inputValue.slice(0, 11);
        }

        let formattedValue = "(";
        
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 2) {
                formattedValue += ") ";
            } else if (i === 7) {
                formattedValue += "-";
            }
            formattedValue += inputValue[i];
        }

        input.value = formattedValue;
    });
});
