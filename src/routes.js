const usersController = require('./controllers/UsersController');

module.exports = [
  {
    method: 'GET',
    endpoint: '/users',
    handler: usersController.listUsers,
  },
  {
    method: 'GET',
    endpoint: '/users/:id',
    handler: usersController.getUserById,
  },
  {
    method: 'POST',
    endpoint: '/users',
    handler: usersController.createUser,
  },
  {
    method: 'PUT',
    endpoint: '/users/:id',
    handler: usersController.updateUser,
  },
];
