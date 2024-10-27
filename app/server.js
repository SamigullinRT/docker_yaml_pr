const express = require('express');
const os = require('os');

const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the distributed Node.js app!',
    hostname: os.hostname(),
    timestamp: new Date(),
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', hostname: os.hostname() });
});

// Эмуляция задержки, чтобы лучше видеть распределение нагрузки
app.get('/load-test', (req, res) => {
  const delay = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    res.json({
      message: 'Response from load-test endpoint',
      hostname: os.hostname(),
      delay: `${delay}ms`,
      timestamp: new Date(),
    });
  }, delay);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
