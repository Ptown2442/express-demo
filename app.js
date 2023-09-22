const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1', author: 'Porter'},
    {id: 2, name: 'courseAirports', author: 'David'},
    {id: 3, name: 'courseBarHoppers', author: 'Porter'}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name, 
        author: req.body.author
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the given course id was not located');
    res.send(course);
});

app.listen(3000, () => console.log('Listening on port 3000...'));