'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/1a.png"
      },
      {
        spotId: 1,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/1b.png",
      },
      {
        spotId:1,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/1c.png",
      },
      {
        spotId:1,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/1d.png",
      },
      {
        spotId:1,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/1e.png",
      },
      {
        spotId:2,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/2a.png",
      },
      {
        spotId:2,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/2b.png",
      },
      {
        spotId:2,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/2c.png",
      },
      {
        spotId:2,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/2d.png",
      },
      {
        spotId:2,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/2e.png",
      },
      {
        spotId:3,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/3a.png",
      },
      {
        spotId:3,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/3b.png",
      },
      {
        spotId:3,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/3c.png",
      },
      {
        spotId:3,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/3d.png",
      },
      {
        spotId:3,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/3e.png",
      },
      {
        spotId:4,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/4a.png",
      },
      {
        spotId:4,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/4b.png",
      },
      {
        spotId:4,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/4c.png",
      },
      {
        spotId:4,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/4d.png",
      },
      {
        spotId:4,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/4e.png",
      },
      {
        spotId:5,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/5a.png",
      },
      {
        spotId:5,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/5b.png",
      },
      {
        spotId:5,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/5c.png",
      },
      {
        spotId:5,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/5d.png",
      },
      {
        spotId:5,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/5e.png",
      },
      {
        spotId:6,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/6a.png",
      },
      {
        spotId:6,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/6b.png",
      },
      {
        spotId:6,
        url:"https://remotebnb.s3.us-west-1.amazonaws.com/6c.png",
      },
      {
        spotId:6,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/6d.png",
      },
      {
        spotId:6,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/6e.png",
      },
      {
        spotId:7,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/7a.png",
      },
      {
        spotId:7,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/7b.png",
      },
      {
        spotId:7,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/7c.png",
      },
      {
        spotId:7,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/7d.png",
      },
      {
        spotId:7,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/7e.png",
      },
      {
        spotId:8,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/8a.png",
      },
      {
        spotId:8,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/8b.png",
      },
      {
        spotId:8,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/8c.png",
      },
      {
        spotId:8,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/8d.png",
      },
      {
        spotId:8,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/8e.png",
      },
      {
        spotId:9,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/9a.png",
      },
      {
        spotId:9,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/9b.png",
      },
      {
        spotId:9,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/9c.png",
      },
      {
        spotId:9,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/9d.png",
      },
      {
        spotId:9,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/9e.png",
      },
      {
        spotId:10,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/10a.png",
      },
      {
        spotId:10,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/10b.png",
      },
      {
        spotId:10,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/10c.png",
      },
      {
        spotId:10,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/10d.png",
      },
      {
        spotId:10,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/10e.png",
      },
      {
        spotId:11,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/11a.png",
      },
      {
        spotId:11,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/11b.png",
      },
      {
        spotId:11,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/11c.png",
      },
      {
        spotId:11,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/11d.png",
      },
      {
        spotId:11,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/11e.png",
      },
      {
        spotId:12,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/12a.png",
      },
      {
        spotId:12,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/12b.png",
      },
      {
        spotId:12,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/12c.png",
      },
      {
        spotId:12,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/12d.png",
      },
      {
        spotId: 12,
        url: "https://remotebnb.s3.us-west-1.amazonaws.com/12e.png",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
