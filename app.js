const express = require('express') // python의 import //
const app = express();
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('this is try example'));
app.get('/welcome', (req, res) => res.send('hi there nice to meet u!'));
app.get('/welcome2', (req, res) => res.send('hi there nice to meet u! hehehe'));
app.get('/check', (req, res) => res.send('Example app listening on port 3000'));
app.listen(port, () => console.log('Example app listening on port 3000')) 