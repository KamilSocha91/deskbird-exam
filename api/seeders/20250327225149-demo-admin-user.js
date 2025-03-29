'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('adminpassword', 10); // Hash the password
    await queryInterface.bulkInsert('users', [{
      username: 'admin',
      password: hashedPassword,
      role: 'admin', // Set the role to 'admin'
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { username: 'admin' });
  },
};