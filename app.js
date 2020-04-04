const express = require('express'),
    path = require('path'),
    server = express();
server.use(express.static(__dirname));
server.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/index.html`)));
server.listen(process.env.PORT || 3000, () => console.log('listening'));
