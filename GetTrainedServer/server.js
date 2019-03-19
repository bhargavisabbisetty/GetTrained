
//required all necessary modules to construct a server
let express = require('express'),
    port = process.env.PORT || 3003,
    mongoose = require('mongoose'), 
    bodyParser = require('body-parser'),
    cors = require('cors');

//got a mongoose connection to mongoDB database named GetTrained
mongoose.connect('mongodb://get-trained-admin:iKrC632Y2akRIBHx@cluster0-shard-00-00-koc4n.mongodb.net:27017,cluster0-shard-00-01-koc4n.mongodb.net:27017,cluster0-shard-00-02-koc4n.mongodb.net:27017/get-trained?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

let app = express();
app.use(bodyParser.json());

var busboy = require('connect-busboy');    
app.use(busboy());
//Enabling CORS
app.use(cors());
app.use(express.static(__dirname + '/public'));

let initApp = require('./app');
initApp(app);

app.listen(port);
console.log('Get Trained server started on: '+ port);