const server = require('express')();
server.use(require('express').json());
server.get('/', (req, res) => res.sendFile('index.html'));
server.listen(3000, () => console.log('listening'));
