'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};

// import { QueryInterface, DataTypes } from 'sequelize';

// module.exports = {
//   up: async (queryInterface: QueryInterface) => {
//     const tablesInDb = await queryInterface.showAllTables();
//     const tableName = 'users';

//     if (tablesInDb.indexOf(tableName) === -1) {
//       await queryInterface.createTable(tableName, {
//         id: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         username: {
//           type: DataTypes.STRING(50),
//           allowNull: false,
//         },
//         email: {
//           type: DataTypes.STRING(320),
//           allowNull: false,
//           unique: true,
//         },
//         createdAt: {
//           type: DataTypes.DATE,
//           allowNull: true,
//         },
//         updatedAt: {
//           type: DataTypes.DATE,
//           allowNull: true,
//         },
//         deletedAt: {
//           type: DataTypes.DATE,
//           allowNull: true,
//         },
//       });
//     }
//   },

//   down: async (queryInterface: QueryInterface) => {
//     await queryInterface.dropTable('users');
//   },
// };
