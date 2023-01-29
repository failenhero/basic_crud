const userModel = require('../models/user.model');

const userService = {
    create: user => userModel.create(user)
}

module.exports = userService;