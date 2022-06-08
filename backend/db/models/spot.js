'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    guests: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: "userId" });
    Spot.hasMany(models.Image, { foreignKey: "spotId" });
    Spot.hasOne(models.Booking, { foreignKey: "spotId"})
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.SavedSpot, { foreignKey: "spotId" });
  };
  return Spot;
};
