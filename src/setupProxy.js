const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/authapi',
    createProxyMiddleware({
      target: 'https://freefakeapi.io',
      changeOrigin: true,
      pathRewrite: {
        '^/authapi': '',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
};
