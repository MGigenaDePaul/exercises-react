import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({searchTerm, handleSearchTerm}) => (
    <div>filter shown with <input value={searchTerm} onChange={handleSearchTerm}/> </div>
)

const PersonForm = ({addPerson, newName, handleNameChange, handleNumberChange, newNumber}) => (
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div><button type="submit">add</button></div>
        </form>
)

const Persons = ({persons, newName, searchTerm}) => {
    const filteredPersons = persons.filter(person => (person.name.toLowerCase() === newName.toLowerCase()) 
        ? alert(`${newName} is already added to phonebook`) 
        : persons.map(person => <li key={person.id}>{person.name}</li>)
    )
    console.log(filteredPersons)

    const filterPeopleByName = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filterPeopleByName)

    return (
        <div>
            {filterPeopleByName.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </div>
    )
}


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        console.log('effect')
        axios.get('http://localhost:3001/persons').then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
        })
    }, [])
    console.log('render', persons.length, 'persons')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        axios.post('http://localhost:3001/persons', personObject)
        .then(response => {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        })
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSearchTerm = (event) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
                <Filter handleSearchTerm={handleSearchTerm}/>
            <h3>add a new</h3>
                <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
            <h3>Numbers</h3>
                <Persons searchTerm={searchTerm} newName={newName} persons={persons}/>
        </div>
    )
}

export default App