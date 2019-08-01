const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const path = require('path');


const items = require('./routes/Api/items');
const users = require('./routes/Api/users');
const auths = require('./routes/Api/auth');
const login = require('./routes/Api/login_an_logout')

const app = express();


app.use(bodyParser.json());


//DB conection
//var mongoose = require('mongoose');
mongoose.connect('mongodb://brad:rook@gloriousdb-shard-00-00-p2gnu.mongodb.net:27017,gloriousdb-shard-00-01-p2gnu.mongodb.net:27017,gloriousdb-shard-00-02-p2gnu.mongodb.net:27017/test?ssl=true&replicaSet=GloriousDB-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("Connected successfully!");
});



//======================
//    Models
//======================
    
const { User } = require('./models/User');


    app.use('/api/user/logout', login);

    app.use('/api/users/login', login);

    app.use('/api/users/auth', auths);

    app.use('/api/users/register', users);
 
    app.use('/api/items', items);

    //serve static assets in production
    if(process.env.NODE.env === 'production'){
      app.use(express.static('client/build'));
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
      });
  
    }



    


    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on ${port}`));

    