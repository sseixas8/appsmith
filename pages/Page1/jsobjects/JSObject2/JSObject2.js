export default {
  validateLogin: async () => {
    // Pegando a resposta RAW da API
    const rawResponse = Api1.data.response;

    // Criando um parser para analisar o XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rawResponse, "application/xml");

    // Pegando o valor do <result> no XML
    const result = xmlDoc.getElementsByTagName("result")[0].textContent;

    // Verificando o resultado
    if (result === "true") {
      navigateTo("page2"); // Navega para a página 2
    } else {
      showAlert("Usuário ou senha inválidos!", "error"); // Exibe um alerta de erro
    }
  }
}