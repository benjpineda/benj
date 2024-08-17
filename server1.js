const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');


const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploaded/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: fileStorage });


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});


app.post('/uploaded', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
