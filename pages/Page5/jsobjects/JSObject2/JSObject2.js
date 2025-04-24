export default {
  getEntityInfo() {
    const xmlString = Api4.data[0]?.response;
    if (!xmlString) return [];

    // Verifica se o XML contém os dados esperados
    console.log("Conteúdo do XML:", xmlString);

    // Extrair todos os blocos <item>...</item> de forma genérica
    const items = xmlString.match(/<item[\s\S]*?<\/item>/g);
    console.log("Items extraídos:", items); // Verifique o que foi extraído

    if (!items) return [];

    // Mapeamento dos dados para o formato desejado
    return items.map(itemXml => {
      const getValue = (tag) => {
        const match = itemXml.match(new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`));
        return match ? match[1].replace(/"/g, "") : "";
      };

      return {
        nome: getValue("nome"),
        email: getValue("email"),
        localidade: getValue("localidade"),
        telemovel: getValue("telemovel"),
        idlocalizacao: getValue("idlocalizacao"),
        idatributo: getValue("idatributo")
      };
    });
  }
}
