const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.235.173.222:3000/api/v1',
      changeOrigin: true,
    })
  );
};