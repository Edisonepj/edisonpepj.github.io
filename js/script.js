// Importe as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";

// Sua configuração do Firebase para a web
const firebaseConfig = {
  apiKey: "AIzaSyCwfiRk9IlJeaz5GhLHbvm1f9qrNq-5T3Q",
  authDomain: "pi22023.firebaseapp.com",
  databaseURL: "https://pi22023-default-rtdb.firebaseio.com",
  projectId: "pi22023",
  storageBucket: "pi22023.appspot.com",
  messagingSenderId: "262575922279",
  appId: "1:262575922279:web:6425b7b92efb5fa14908c2",
  measurementId: "G-ZJGMCSW9F8"
};
// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.getDatabase(app);

// Lidar com o envio do formulário
const cadastroForm = document.getElementById('cadastroForm');
cadastroForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const dadosEmpresaRef = firebase.ref(db, 'empresas');

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;

    // Crie um objeto com os dados do formulário
    const dadosEmpresa = {
        nome: nome,
        setor: setor,
        email: email,
        telefone: telefone,
        descricao: descricao
    };

    // Envie os dados para o Firebase
    firebase.set(dadosEmpresaRef, dadosEmpresa)
        .then(() => {
            console.log('Dados da empresa gravados com sucesso.');
            cadastroForm.reset();
        })
        .catch((error) => {
            console.error('Erro ao gravar dados da empresa:', error);
        });
});

