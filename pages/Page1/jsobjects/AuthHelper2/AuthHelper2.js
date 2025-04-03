export default {
  myFun2: () => {
    const username = input1.text;
    const password = input2.text;

    const soapBody = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ipor="http://www.iportalmais.pt">
      <soapenv:Header/>
      <soapenv:Body>
        <ipor:userAuthentication soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
          <username xsi:type="xsd:string">${username}</username>
          <password xsi:type="xsd:string">${password}</password>
        </ipor:userAuthentication>
      </soapenv:Body>
    </soapenv:Envelope>`;
		
		    const cleanedSoapBody = soapBody.replace(/\\"/g, '"');

    return { body: soapBody };
  },
};