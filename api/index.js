const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const Mongoose  = require('mongoose');


const app = express();

// Connect to MongoDB outside routes
Mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

app.use(cors());
app.use(express.json());

app.get('/api/test', (req,res) => {
  res.json('test ok43');
});

app.post('/api/transaction', async (req,res) => {
  // await Mongoose.connect(process.env.MONGO_URL);
  const {name,description,datetime,price} = req.body;
  // console.log(name,description,datetime,price);
  const transaction = await Transaction.create({name,description,datetime,price});
  res.json(transaction);

});


app.get('/api/transactions', async (req,res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
})


app.listen(4040, () => {
  console.log('Server listening on port 4040');
});
//x2IKjla4gf8SSWr7
//lcRredOPlCR3OmIc
//lcRredOPlCR3OmIc