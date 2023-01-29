const Router = require('express');
const userController = require('../controllers/user.controller');

const userRouter = new Router();

userRouter.post('/user', userController.createUser);
userRouter.get('/user', userController.getUsers);
userRouter.get('/user/:id', userController.getUserById);
userRouter.put('/user/:id', userController.updateUserById);
userRouter.delete('/user/:id', userController.deleteUserById);


module.exports = userRouter;