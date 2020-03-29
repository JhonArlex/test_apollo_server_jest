const server = require('../../index');

module.exports = async () => {
  global.httpServer = server;
  await global.httpServer.listen({port: 4000});
};
