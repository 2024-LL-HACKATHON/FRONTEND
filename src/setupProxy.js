const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: process.env.REACT_APP_PROXY,
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request to /api:", req.originalUrl);
      },
      onError: (err, req, res) => {
        console.error("Error proxying request to /api:", err);
      },
    })
  );
  app.use(
    createProxyMiddleware("/sign-api", {
      target: process.env.REACT_APP_PROXY,
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log("Proxying request to /sign-api:", req.originalUrl);
      },
      onError: (err, req, res) => {
        console.error("Error proxying request to /sign-api:", err);
      },
    })
  );
};
