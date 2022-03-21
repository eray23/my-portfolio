const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');

const contactController = require('./controllers/contactController');


//Connect Database
mongoose.connect('mongodb+srv://eray23:<password>@cluster0.0wq8e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) =>{
    res.render('index');
});
app.post('/createContact', contactController.createContact);


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})