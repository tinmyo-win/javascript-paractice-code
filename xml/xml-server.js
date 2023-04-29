const http = require('http');
const xml2js = require('xml2js');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.headers['content-type'] === 'application/xml') {
    let requestBody = '';
    
    req.on('data', (chunk) => {
      requestBody += chunk.toString();
    });
    
    req.on('end', () => {
      // Parse the XML request body into a JavaScript object
      xml2js.parseString(requestBody, (err, result) => {
        if (err) {
          console.error(err);
          res.writeHead(400, { 'Content-Type': 'application/xml' });
          res.end('<error>Invalid XML request</error>');
        } else {

          let bankInfo = result['soapenv:Envelope']['soapenv:Body'][0]['ws:svcBulkFundTransfer'][0]

          for (let key in bankInfo) {
            bankInfo[key] = bankInfo[key][0];
          }
          

          console.log(bankInfo);
      
          // Do some processing with the JavaScript object here
          const responseObj = { message: 'Hello from the server!',
                status: "Transfer receive successfully" };
          
          // Convert the response object to XML
          const builder = new xml2js.Builder();
          const responseXml = builder.buildObject(responseObj);
          
          // Set the response headers and body
          res.writeHead(200, { 'Content-Type': 'application/xml' });
          res.end(responseXml);
        }
      });
    });
  } else {
    // Return a 404 error for all other requests
    res.writeHead(404);
    res.end();
  }
});

server.listen(3333, () => {
  console.log('Server listening on port 3333');
});
