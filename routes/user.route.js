const route = require('express').Router();

const {getAllUsers,createUser,getOneUser,deleteUser, updateUser} = require('../controllers/user.controller');


route.get('/',getAllUsers);
route.get('/:id',getOneUser);
route.post('/',createUser);
route.patch('/:id',updateUser);
route.delete('/:id',deleteUser);


module.exports = route;