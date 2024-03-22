const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Obtiene la URL solicitada por el navegador
  const url = req.url;

  // Si la URL es raíz, sirve home.html como página de inicio
  if (url === '/') {
    serveHomePage(res);
    return;
  }

  // Determina el nombre del archivo correspondiente
  let filePath = path.join(__dirname, url);

  // Verifica si el archivo solicitado existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Si el archivo no existe, devuelve un error 404
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found');
      return;
    }

    // Si el archivo existe, lo sirve
    serveFile(filePath, res);
  });
});

function serveHomePage(res) {
  const homeFilePath = path.join(__dirname, 'home.html');
  serveFile(homeFilePath, res);
}

function serveFile(filePath, res) {
  // Lee el archivo y envíalo como respuesta
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Si hay un error al leer el archivo, devuelve un error 500
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('500 Internal Server Error');
      return;
    }

    // Determina el tipo MIME basado en la extensión del archivo
    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.css') {
      contentType = 'text/css';
    } else if (ext === '.js') {
      contentType = 'application/javascript';
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(data);
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
