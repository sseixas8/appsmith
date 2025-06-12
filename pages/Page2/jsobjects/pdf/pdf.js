export default {
	Button1onClick() {
		const { jsPDF } = jspdf;
		const doc = new jsPDF();

		const nome = Input1.text;
		const especialidade = Input2.text;
		const medico = Input3.text;
		const data = DatePicker1.selectedDate;
		const nota = Input4.text;

		const margemEsquerda = 20;
		let posY = 20;
		
		doc.setFontSize(18);
		doc.setTextColor(0, 102, 204);
		doc.text("Relatório de Consulta", margemEsquerda, posY);

		posY += 10;
		doc.setLineWidth(0.5);
		doc.setDrawColor(0, 102, 204);
		doc.line(margemEsquerda, posY, 190, posY); 

		doc.setFontSize(12);
		doc.setTextColor(0, 0, 0); 
		posY += 15;

		doc.text(` Nome do Paciente: ${nome}`, margemEsquerda, posY);
		posY += 10;

		doc.text(` Especialidade: ${especialidade}`, margemEsquerda, posY);
		posY += 10;

		doc.text(` Médico Responsável: ${medico}`, margemEsquerda, posY);
		posY += 10;

		doc.text(` Data da Consulta: ${data}`, margemEsquerda, posY);
		posY += 15;

		doc.setDrawColor(200);
		doc.line(margemEsquerda, posY, 190, posY);
		posY += 10;

		doc.setFontSize(13);
		doc.setFont("helvetica", "bold");
		doc.text(" Nota do Médico:", margemEsquerda, posY);
		posY += 8;

		doc.setFont("helvetica", "normal");
		doc.setFontSize(12);
		const notaFormatada = doc.splitTextToSize(nota, 170);
		doc.text(notaFormatada, margemEsquerda, posY);

		const pdfBase64 = doc.output("datauristring");

		storeValue("pdfBase64", pdfBase64);
	}
};
