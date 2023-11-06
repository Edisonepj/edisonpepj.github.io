document.addEventListener("DOMContentLoaded", function() {
    // Importe as funções necessárias do SDK do Firebase
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getDatabase, ref, set, get } from "firebase/database";

    // Sua configuração do Firebase para a web
    const firebaseConfig = {
      apiKey: "AIzaSyCwfiRk9IlJeaz5GhLHbvm1f9qrNq-5T3Q",
      authDomain: "pi22023.firebaseapp.com",
      projectId: "pi22023",
      storageBucket: "pi22023.appspot.com",
      messagingSenderId: "262575922279",
      appId: "1:262575922279:web:6425b7b92efb5fa14908c2",
      measurementId: "G-ZJGMCSW9F8"
    };

    // Inicialize o Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Inicialize o Firebase Realtime Database
    const db = getDatabase(app);

    // Exemplo de gravação de dados
    const dadosEmpresaRef = ref(db, 'empresas');
    const dadosEmpresa = {
      nome: "Nome da Empresa",
      setor: "Setor da Empresa",
      email: "email@empresa.com",
      telefone: "Telefone da Empresa",
      descricao: "Descrição da Empresa"
    };

    set(dadosEmpresaRef, dadosEmpresa)
      .then(() => {
        console.log("Dados da empresa gravados com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao gravar dados da empresa:", error);
      });

    // Exemplo de leitura de dados
    const leituraEmpresaRef = ref(db, 'empresas');
    get(leituraEmpresaRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dadosEmpresaLidos = snapshot.val();
          console.log("Dados da empresa lidos:", dadosEmpresaLidos);
        } else {
          console.log("Nenhum dado encontrado para a empresa.");
        }
      })
      .catch((error) => {
        console.error("Erro ao ler dados da empresa:", error);
      });
});
