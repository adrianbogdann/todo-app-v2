'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          "name": "Adreano",
          "email": "adreano@gmail.com",
          "password": "nobodyknowstis",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        },
        {
          "name": "Romeo",
          "email": "romeo@gmail.com",
          "password": "sexfantastik",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        },
        {
          "name": "Lucretia",
          "email": "luk4u@gmail.com",
          "password": "*2aj#.9sa8.p4r4n0i4",
          "createdAt": new Date().toUTCString(),
          "updatedAt": new Date().toUTCString(),
        }
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
