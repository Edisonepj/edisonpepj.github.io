// Importe as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

// Configuração do Firebase da sua aplicação web
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use o Firebase Realtime Database
const db = getDatabase(app);
const dadosEmpresaRef = ref(db, 'empresas');

// Agora você pode interagir com o Firebase Realtime Database usando o Firebase SDK no ambiente do navegador.


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
