const knex = require('../database/db')
const userService = require('../services/user.service');

class UserController {
    async createUser(req, res) {
        return userService.create(req.body).then(() => res.sendStatus(201));
    }

    async getUsers(req, res) {
        return knex.select().table('person')
            .then(persons => res.json(persons));
    }

    async getUserById(req, res) {
        
    }

    async updateUserById(req, res) {
        
    }

    async deleteUserById(req, res) {
        
    }
}

module.exports = new UserController();