// const http = require('http');
// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer({});

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   proxy.web(req, res, {
//     target: 'http://api.openweathermap.org'
//   });
// }).listen(8080);

export const API_KEY = 'f9a8afece24fc95713882fe8f164ee19';

const express = require('express');
const fetch = require('node-fetch');

const app = express();


app.get('/weather/:city', async (req, res) => {
  const { city } = req.params;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// node server.js
