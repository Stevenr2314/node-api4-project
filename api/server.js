const express = require('express')
const Users = require('./data/model')
const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
    Users.getAll()
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err))
})

server.post('/api/register', (req, res) => {
    Users.create(req.body)
        .then(newUser => res.status(201).json(newUser))
        .catch(err => console.log(err))
})

server.post('/api/login', (req, res) => {
    Users.login(req.body)
        .then(msg => res.status(200).json(msg))
        .catch(err => console.log(err))
})


module.exports = server