const server = require('express')();
server.use(require('express').json());
server.get('/', (req, res) => res.sendfile('index.html'));
server.listen(3000, () => console.log('listening'));