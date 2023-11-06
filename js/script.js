document.addEventListener("DOMContentLoaded", function() {
    // Importe as funções necessárias do SDK do Firebase
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

    // Sua configuração do Firebase para a web
    const firebaseConfig = {
      apiKey: "AIzaSyCwfiRk9IlJeaz5GhLHbvm1f9qrNq-5T3Q",
      authDomain: "pi22023.firebaseapp.com",
      projectId: "pi22023",
      storageBucket: "pi22023.appspot.com",
      messagingSenderId: "262575922279",
      appId: "1:262575922279:web:6425b7b92efb5fa14908c2",
      measurementId: "G-ZJGMCSW9F8" // Opcional se você tiver um ID de medição
    };

    // Inicialize o Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

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
