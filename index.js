const express = require('express');
const app = express();

let topMovies = [
    {
        title: 'Jumanji',
        director: 'Joe Johnston'
    },
    {
        title: 'Captain America: Civil War',
        director: 'Anthony Russo, Joe Russo'
    },
    {
        title: 'Wall-E',
        director: 'Andrew Stanton',
    },
    {
        title: 'Transformers',
        director: 'Michael Bay'
    },
    {
        title: 'Home',
        director: 'Tim Johnson'
    },
    {
        title: 'The Incredible Hulk',
        director: 'Louis Leterrier'
    },
    {
        title: 'The Goonies',
        director: 'Richard Donner'
    },
    {
        title: 'The Matrix',
        director: 'Lana Wachowski, Lilly Wachowski'
    },
    {
        title: 'Back To The Future',
        director: 'Robert Zemeckis'
    },
    {
        title: 'The Incredibles',
        director: 'Brad Bird'
    }
];

// GET requests
app.get("/movies", (req, res) => {
    res.json(topMovies);
});

app.get("/", (req, res) => {
    res.send('Welcome to myFlix API.')
})

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});