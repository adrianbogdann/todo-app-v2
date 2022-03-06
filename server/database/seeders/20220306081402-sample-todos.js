'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Todos",
      [
        {
          "content": "Learn Apollo",
          "userId": 1,
          "status": "active",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        },
        {
          "content": "Learn React",
          "userId": 2,
          "status": "active",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        },
        {
          "content": "Learn meteor",
          "userId": 5,
          "status": "active",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        }
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Todos', null, {});
  }
};
