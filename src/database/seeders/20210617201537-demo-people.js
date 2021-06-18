"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "John Doe",
          active: true,
          email: "john123@gmail.com",
          role: "estudent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kelwin",
          active: true,
          email: "kelwin08@gmail.com",
          role: "estudent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "eliana",
          active: true,
          email: "elianacar@gmail.com",
          role: "professor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("People", null, {});
  },
};
