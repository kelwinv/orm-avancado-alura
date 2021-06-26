"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Levels",
      [
        {
          desc_level: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_level: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_level: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Levels", null, {});
  },
};
