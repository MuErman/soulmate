const express  = require('express');
const bodyParser  = require('body-parser');

const app = express();
app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://soulmate:test1234@cluster0.69rdx.mongodb.net/soulmate?retryWrites=true&w=majority";
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => {
    console.log('connected to db successfully');
    const db = client.db('soulmate');
    const users =  db.collection('users');

    app.get('/',  function(req,  res) {
        res.sendFile(__dirname + '/index.html');
    })
    app.listen(3000, function()  {
        console.log('connecting to express');
    });

    client.close();
}).catch(error => { 
    console.error('connection  error',  error);
});


