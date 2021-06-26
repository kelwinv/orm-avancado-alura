"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "School_classes",
      [
        {
          start_date: "2020-02-01",
          level_id: 1,
          docente_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-02-01",
          level_id: 2,
          docente_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-02-01",
          level_id: 3,
          docente_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-07-01",
          level_id: 3,
          docente_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("School_class", null, {});
  },
};
