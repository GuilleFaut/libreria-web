const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000; // Port where the server will run

// Middleware
app.use(cors());
app.use(express.json()); // To be able to receive data in JSON format

// Connection to MongoDB 
mongoose.connect('mongodb://localhost:27017/libreria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected with MongoDB'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Basic path to verify the server
app.get('/', (req, res) => {
  res.send('Herzlich willkommen im Bookshop !!');
});

// Path to get the books from the JSON file
app.get('/api/books', (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : '';

  fs.readFile(path.join(__dirname, 'data', 'books.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading the book file' });
    }

    // Convert the contents of the JSON file to a JavaScript object
    const books = JSON.parse(data);

    // Filter books if there is a search query
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query)
    );

    res.json(filteredBooks); // Send the filtered list as response
  });
});


// Serve the book images from a subfolder ‘books_covers’.
app.use('/images', express.static(path.join(__dirname, 'images', 'books_covers')));


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
