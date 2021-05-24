'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    body_region_id: DataTypes.INTEGER
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
    Exercise.hasMany(models.Review, {foreignKey: "exercise_id"})
    Exercise.hasMany(models.Exerciseimage, {foreignKey: "exercise_id"})
    Exercise.belongsTo(models.Bodyregion, {foreignKey: "body_region_id"})
    Exercise.belongsTo(models.User, {foreignKey: "user_id"})
  };
  return Exercise;
};
