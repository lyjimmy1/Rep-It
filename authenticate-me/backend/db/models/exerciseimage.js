'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exerciseimage = sequelize.define('Exerciseimage', {
    exercise_id: DataTypes.INTEGER,
    image_URL: DataTypes.STRING
  }, {});
  Exerciseimage.associate = function(models) {
    // associations can be defined here
    Exerciseimage.belongsTo(models.Exercise, {foreignKey: "exercise_id"})
  };
  return Exerciseimage;
};
