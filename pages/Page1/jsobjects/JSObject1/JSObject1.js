export default {
  loginUser: async () => {
    try {
      const response = await Api1.run();
      console.log("Resposta completa da API:", response);

      // Se response não for um array ou estiver vazio, exibe erro
      if (!response || !Array.isArray(response) || response.length === 0) {
        showAlert("Erro: A resposta não veio no formato esperado.", "error");
        return;
      }

      console.log("Primeiro item do array:", response[0]);

      // Verifica se existe a chave "response" dentro do primeiro item do array
      if (!response[0].response) {
        showAlert("Erro: A chave 'response' não foi encontrada na resposta da API.", "error");
        return;
      }

      const xmlString = response[0].response;
      console.log("XML da resposta:", xmlString);

      // Parseando o XML
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      // Extraindo o valor de <result>
      const resultNode = xmlDoc.getElementsByTagName("result")[0];
      const result = resultNode ? resultNode.textContent.trim() : null;

      console.log("Valor de <result>:", result);

      if (result === "true") {
        showAlert("Login bem-sucedido!", "success");

        // Pegando o sessionid se existir
        const sessionNode = xmlDoc.getElementsByTagName("sessionid")[0];
        const sessionId = sessionNode ? sessionNode.textContent.trim() : null;

        if (sessionId) {
          storeValue("sessionToken", sessionId);
        }

        navigateTo("Dashboard");
      } else {
        showAlert("Autenticação falhou. Verifique as credenciais.", "error");
      }
    } catch (error) {
      showAlert("Erro na autenticação: " + error.message, "error");
    }
  }
};
