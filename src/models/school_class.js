"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class School_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      School_class.hasMany(models.Enrollments, {
        foreignKey: "class_id",
      });

      School_class.belongsTo(models.People, {
        foreignKey: "docente_id",
      });
      School_class.belongsTo(models.Levels, {
        foreignKey: "level_id",
      });
    }
  }
  School_class.init(
    {
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "School_class",
    }
  );

  return School_class;
};
