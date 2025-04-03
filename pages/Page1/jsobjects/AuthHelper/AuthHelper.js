export default {
  escapeXML: (value) => {
    return value.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "")
                .replace(/'/g, "&apos;")
                .trim();
  },

  getUsername: () => {
    return AuthHelper.escapeXML(input1.text.trim());
  },

  getPassword: () => {
    return AuthHelper.escapeXML(input2.text.trim());
  }
};
