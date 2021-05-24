'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bodyregion = sequelize.define('Bodyregion', {
    body_type: DataTypes.STRING
  }, {});
  Bodyregion.associate = function(models) {
    // associations can be defined here
    Bodyregion.hasMany(models.Exercise, {foreignKey:"body_region_id"})
  };
  return Bodyregion;
};
