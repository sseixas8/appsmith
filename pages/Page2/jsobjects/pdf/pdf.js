export default {
	Button1onClick() {
		const { jsPDF } = jspdf;
		const doc = new jsPDF();

		const nome = Input1.text;
		const especialidade = Input2.text;
		const medico = Input3.text;
		const data = DatePicker1.selectedDate;
		const nota = Input4.text;

		doc.text("Documento Gerado", 20, 20);
		doc.text(`Nome: ${nome}`, 20, 40);
		doc.text(`Nota: ${nota}`, 20, 60);
		doc.text(`Doutor: ${medico}`, 20, 80);
		doc.text(`Data da Consulta: ${data}`, 20, 100);
		doc.text(`Especialidade: ${especialidade}`, 20, 120);

		// Converter para Base64
		const pdfBase64 = doc.output("datauristring");

		// Guardar no storeValue
		storeValue("pdfBase64", pdfBase64);
	}
};
