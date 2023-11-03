document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validar os campos aqui
        const nome = document.getElementById("nome").value;
        const setor = document.getElementById("setor").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const descricao = document.getElementById("descricao").value;

        // Exemplo de validação simples do campo de e-mail
        if (!isValidEmail(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // Enviar os dados para o servidor ou fazer outras ações aqui
        alert("Formulário enviado com sucesso!");
    });

    // Função de validação de e-mail simples
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
