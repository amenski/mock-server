const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/data/users');

server.get('/v1/vehicle', (req, res, next) => {
  res.status(200).send(userData.getVehicles);
});

server.listen(8080, () => {
  console.log('JSON server listening on port 3000');
});

