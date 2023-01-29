const knex = require('../database/db');

const userModel = { 
    create: user => knex('person').insert({ name: user.name, surname: user.surname }),
    find: () => {

    },
    findMany: () => {

    },
    update: () => {

    },
    delete: () => {

    }
}

module.exports = userModel;