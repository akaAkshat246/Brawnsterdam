const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.bin': 'application/octet-stream',
  '.glb': 'model/gltf-binary',
  '.mp3': 'audio/mpeg',
  '.srt': 'text/plain',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.dds': 'image/vnd-ms.dds',
  '.pvr': 'application/octet-stream',
  '.ktx': 'image/ktx',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/save-logo') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const base64Data = body.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync(path.join(__dirname, 'assets', 'img', 'logo.png'), base64Data, 'base64');
      console.log('Successfully saved new assets/img/logo.png');
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/save-tribute') {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      fs.writeFileSync(path.join(__dirname, 'assets', 'img', 'tribute_alpha.gif'), buf);
      console.log('Successfully saved new assets/img/tribute_alpha.gif, size:', buf.length);
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = path.join(__dirname, reqPath);

  // Fallback to /assets/... if requested without /assets/ prefix
  if (!fs.existsSync(filePath)) {
    const assetsFallback = path.join(__dirname, 'assets', reqPath);
    if (fs.existsSync(assetsFallback)) {
      filePath = assetsFallback;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.log(`404 ${req.method} ${req.url} -> [${filePath}]`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + reqPath);
      return;
    }

    console.log(`200 ${req.method} ${req.url}`);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support Range requests (useful for audio/video)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = end - start + 1;
      const file = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
