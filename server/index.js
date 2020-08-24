const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const User = require('./schemas/User');

const mongoDB = 'mongodb://localhost:27017/everayn';



mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const compression = require('compression');
const path = require('path');
const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'dist')));

function getRoot(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
}

// app.get('/api/pages', async (req, res) => {
//     let deities;
//     try {
//         deities = await Deity.find();
//     } catch (err) {
//         return res.send(err);
//     }
//     const names = deities.map(deity => deity.title);
//     res.send({pantheon: names})
// })

// app.get('/api/page', async (req, res) => {
//     const title = decodeURI(req.query.page);
//     let deity;
//     try {
//         deity = await Deity.findOne({title});
//     } catch (err) {
//         return res.send(err);
//     }
    
//     res.send(deity);
// });

app.get('*', getRoot);


const port = 3003;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`All Terrain Roll is listening on port ${port}`);
});