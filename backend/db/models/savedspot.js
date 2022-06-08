'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedSpot = sequelize.define('SavedSpot', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  SavedSpot.associate = function(models) {
    // associations can be defined here
    SavedSpot.belongsTo(models.User, { foreignKey: "userId" });
    SavedSpot.belongsTo(models.Spot, { foreignKey: "spotId" })

  };
  return SavedSpot;
};
