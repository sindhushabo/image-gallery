
const express = require('express');
const open = require('open');         
const port = 5005;
const app = express();
(async () => {
    await open('http://localhost:5005', { app: ['google chrome'] });
})();
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`);
});
