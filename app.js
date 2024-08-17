const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname));


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/process_get', (req, res) => {
const response = {
first_name: req.query.first_name,
last_name: req.query.last_name
};
console.log(response);
res.json(response);
});


app.get('/user', (req, res) => {
const userID = req.query.id;
res.send(`User ID is ${userID}`);
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});