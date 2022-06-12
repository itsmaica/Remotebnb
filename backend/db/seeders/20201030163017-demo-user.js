'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/defaultbird.png",
        firstName: "Demo",
        lastName: "User",
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/chere.jpeg",
        firstName: "Chere-Anne",
        lastName: "Lucina",
        username: 'coco_chere',
        email: "chere@aa.io",
        hashedPassword: 'blueblue',
      },
      {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/parrot.jpeg",
        firstName: "Lance",
        lastName: "Santos",
        username: "ben10__",
        email: "ben10__",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/tony.jpeg",
        firstName: "Tony",
        lastName: "Ngo",
        username: "asparagus",
        email: "tony@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/tim.jpeg",
        firstName: "Timothy",
        lastName: "Justin",
        username: "shruuug",
        email: "tim@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/leaf.jpeg",
        firstName: "Leaf",
        lastName: "Green",
        username: "leafygreens",
        email: "leaf@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/pat.jpeg",
        firstName: "Pat",
        lastName: "Evangelista",
        username: "i_like_pugs",
        email: "pat@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/jodi.png",
        firstName: "Jodi",
        lastName: "Evangelista",
        username: "Jodai",
        email: "jodi@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/grence.jpeg",
        firstName: "Grence",
        lastName: "Alarcon",
        username: "mama_goku",
        email: "grence@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/michael.jpeg",
        firstName: "Michael",
        lastName: "Alarcon",
        username: "papa_goku",
        email: "mike@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/ale.jpeg",
        firstName: "Ale",
        lastName: "Ernesto",
        username: "ale_ale_ale",
        email: "ale@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }, {
        profilePic: "https://remotebnb.s3.us-west-1.amazonaws.com/carlos.jpeg",
        firstName: "Carlos",
        lastName: "Ernesto",
        username: "nae_nae",
        email: "carlos@aa.io",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
