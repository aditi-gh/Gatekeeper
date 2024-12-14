const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const { Visitor } = require('./models'); // Ensure this path is correct

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/visitor-signup', (req, res) => res.render('visitor-signup'));
app.get('/employee-signup', (req, res) => res.render('employee-signup'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/about', (req, res) => res.render('about'));

app.post('/visitor-signup', async (req, res) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.status(201).json({ success: true, visitor });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
