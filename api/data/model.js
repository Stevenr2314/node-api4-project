const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const initializeUsers = () => ([
    {
        id: getId(),
        username: "FirstUser",
        password: "admin"
    }
])
const users = initializeUsers();

const getAll = () => {
    return Promise.resolve(users)
  }

const create = credentials => {
    const newUser = { id: getId(), username: credentials.username, password: credentials.password }
    users.push(newUser)
    return Promise.resolve(newUser)
  }

const login = (credentials) => {
    const user = users.find(user => user.username === credentials.username & user.password === credentials.password)
    return Promise.resolve(user)
}

module.exports = {
    getAll,
    create,
    login,
  }