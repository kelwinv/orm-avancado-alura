"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("School_classes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      start_date: {
        type: Sequelize.DATEONLY,
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "People",
          key: "id",
        },
      },
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Levels",
          key: "id",
        },
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
    await queryInterface.dropTable("School_classes");
  },
};
