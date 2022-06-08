'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Bookings', [
        {
          spotId: 10,
          userId: 1,
          startDate: '2022-06-26',
          endDate: '2022-06-28',
        },
        {
          spotId: 2,
          userId: 1,
          startDate: '2022-07-04',
          endDate: '2022-07-08',
        },
        {
          spotId: 10,
          userId: 1,
          startDate: '2022-08-01',
          endDate: '2022-08-05',
        },
      ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Bookings', null, {});
  }
};
