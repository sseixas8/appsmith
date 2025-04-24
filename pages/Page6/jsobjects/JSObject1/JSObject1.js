export default {
  parseDocumentsXML: () => {
    try {
      const xmlString = Api1.data; // ou substitui pelo nome correto da tua API
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const documentItems = xmlDoc.getElementsByTagName("documents")[0]
        .getElementsByTagName("item");

      const documents = Array.from(documentItems).map(doc => {
        const getText = (tag) => {
          const el = doc.getElementsByTagName(tag)[0];
          return el && el.childNodes.length ? el.childNodes[0].nodeValue : '';
        };

        return {
          iddoc: getText("iddoc"),
          title: getText("title"),
          code: getText("code"),
          createdon: getText("createdon"),
          author: getText("author"),
          finalstate: (() => {
            const flowInfo = doc.getElementsByTagName("workflowinfo")[0];
            const stateNode = flowInfo?.getElementsByTagName("finalstate")[0];
            return stateNode && stateNode.childNodes.length ? stateNode.childNodes[0].nodeValue : '';
          })(),
        };
      });

      return documents;
    } catch (error) {
      showAlert("Erro ao converter XML: " + error.message, "error");
      return [];
    }
  }
}
