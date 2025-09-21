// server.js - Servidor HTTP nativo
const http = require("http");
const fs = require("fs");
const path = require("path");

// Ruta del JSON de productos
const dbPath = path.join(__dirname, "backend", "productos.json");

// Función para leer la DB
function readDB() {
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

// Función para escribir en la DB
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Función para servir archivos estáticos (HTML, CSS, JS, imágenes, etc.)
function serveStatic(req, res) {
  let filePath = "";
  if (req.url === "/") {
    filePath = path.join(__dirname, "html", "index.html");
  } else if (req.url.startsWith("/html/") || req.url.endsWith(".html")) {
    filePath = path.join(__dirname, req.url);
  } else if (req.url.startsWith("/JavaScript/") || req.url.endsWith(".js")) {
    filePath = path.join(__dirname, req.url);
  } else if (req.url.startsWith("/css/") || req.url.endsWith(".css")) {
    filePath = path.join(__dirname, req.url);
  } else if (req.url.startsWith("/img/") || req.url.startsWith("/img2/") || req.url.startsWith("/img3/")) {
    filePath = path.join(__dirname, req.url);
  } else {
    filePath = path.join(__dirname, req.url);
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    let type = "text/plain";

    switch (ext) {
      case ".html":
        type = "text/html";
        break;
      case ".js":
        type = "application/javascript";
        break;
      case ".css":
        type = "text/css";
        break;
      case ".png":
        type = "image/png";
        break;
      case ".jpg":
      case ".jpeg":
        type = "image/jpeg";
        break;
      case ".gif":
        type = "image/gif";
        break;
      case ".ico":
        type = "image/x-icon";
        break;
    }

    res.writeHead(200, { "Content-Type": type });
    res.end(content);
  });
}

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  // === API de juegos ===
  if (req.url.startsWith("/api/juegos")) {
    // GET /api/juegos
    if (req.method === "GET" && req.url === "/api/juegos") {
      const db = readDB();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(db.juegos));
      return;
    }

    // POST /api/juegos
    if (req.method === "POST" && req.url === "/api/juegos") {
      let body = "";
      req.on("data", chunk => (body += chunk));
      req.on("end", () => {
        const db = readDB();
        const nuevo = JSON.parse(body);
        nuevo.id = Date.now();
        db.juegos.push(nuevo);
        writeDB(db);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(nuevo));
      });
      return;
    }

    // DELETE /api/juegos/:id
    if (req.method === "DELETE") {
      const id = parseInt(req.url.split("/").pop());
      const db = readDB();
      db.juegos = db.juegos.filter(j => j.id !== id);
      writeDB(db);

      res.writeHead(204);
      res.end();
      return;
    }
  }

  // === Archivos estáticos ===
  serveStatic(req, res);
});

// Puerto
const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

