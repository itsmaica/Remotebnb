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
          startDate: '2023-06-26',
          endDate: '2023-06-28',
        },
        {
          spotId: 2,
          userId: 1,
          startDate: '2023-07-04',
          endDate: '2023-07-08',
        },
        {
          spotId: 10,
          userId: 1,
          startDate: '2023-08-01',
          endDate: '2023-08-05',
        },
        {
          spotId: 1,
          userId: 7,
          startDate: '2022-12-28',
          endDate: '2022-12-30',
        }
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
