const express = require('express')
const app = express()

let persons = [
    { 
        "id": "1",
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": "2",
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": "3",
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": "4",
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello persons')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = new Date().toString()
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    ${date}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id 
    const person = persons.find((person) => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
