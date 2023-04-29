function fixWidthFile() {
  const fs = require("fs");

  // Define the data that you want to write to the fixed-width file
  const data = [
    { paymentReference: "0001", name: "John Doe", bankCode: "BOFAUS6S123" },
    { paymentReference: "0002", name: "Jane Smith", bankCode: "WELLSFARGO01" },
    { paymentReference: "0003", name: "Bob Johnson", bankCode: "CHASEBANK123" },
  ];

  // Define the positions and lengths of each field in the fixed-width file
  const paymentReferenceStart = 0;
  const paymentReferenceLength = 15;
  const nameStart = 15;
  const nameLength = 20;
  const bankCodeStart = 35;
  const bankCodeLength = 12;

  // Define the filename for the fixed-width file
  const filename = "output.txt";

  // Write the data to the fixed-width file
  const stream = fs.createWriteStream(filename);
  data.forEach((item) => {
    const line = [
      item.paymentReference.padEnd(paymentReferenceLength),
      item.name.padEnd(nameLength),
      item.bankCode.padEnd(bankCodeLength),
    ].join("");
    stream.write(line + "\n");
  });
  stream.end();
}
fixWidthFile();
