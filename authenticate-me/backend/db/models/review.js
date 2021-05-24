'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comments: DataTypes.TEXT,
    users_id: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
    exercise_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: "users_id"});
    Review.belongsTo(models.Exercise, {foreignKey: "exercise_id"})
  };
  return Review;
};
