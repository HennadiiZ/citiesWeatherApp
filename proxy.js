const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  proxy.web(req, res, {
    target: 'http://api.openweathermap.org'
  });
}).listen(8080);