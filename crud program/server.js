console.log('May Node be with you, server running.');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb://StarwarsDBuser:DC35H8Vw4igW4CZ@cluster0-shard-00-00.tz8iw.mongodb.net:27017,cluster0-shard-00-01.tz8iw.mongodb.net:27017,cluster0-shard-00-02.tz8iw.mongodb.net:27017/?ssl=true&replicaSet=atlas-5tlw44-shard-0&authSource=admin&retryWrites=true&w=majority';

MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');
    
    app.set('view engine', 'ejs');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('public'))
    app.use(bodyParser.json())
    
    app.get('/', (req, res) => {
        quotesCollection.find().toArray()
            .then(results => {
                //console.log(results)
                res.render('index.ejs', {quotes: results});
            })
            .catch(error => console.error(error))        
    });
   
    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
                //console.log(result)
            })
            .catch(error => console.error(error))
    });  
    
    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate (
            {name: 'Yoda'},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert: true
            }
        )
        .then(result => {
            console.log(result)
            res.json('Success')
        })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
            {name: req.body.name}
        )
        .then(result => {
            if (result.deletedCount === 0) {
                return res.json('No quote to delete')
            }
            res.json("Deleted Darth Vader's quote")            
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function() {
        console.log('listening on 3000');
    });      
  })
  .catch(error => console.error(error));




