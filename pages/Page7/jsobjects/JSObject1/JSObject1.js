export default {
  parseEntityXML: () => {
    try {
      const xmlString = Api1.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const getEntityItems = xmlDoc.getElementsByTagName("getEntitybyinfoReturn")[0]
        .getElementsByTagName("item");

      const entities = Array.from(getEntityItems).map(entity => {
        const getText = (tag) => {
          const el = entity.getElementsByTagName(tag)[0];
          return el && el.childNodes.length ? el.childNodes[0].nodeValue.replaceAll('"', '') : '';
        };

        return {
          nome: getText("nome"),
          email: getText("email"),
          localidade: getText("localidade"),
          telemovel: getText("telemovel"),
          active: getText("active"),
        };
      });

      return entities;
    } catch (error) {
      showAlert("Erro ao converter XML: " + error.message, "error");
      return [];
    }
  }
}
