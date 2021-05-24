'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Reviews', [
      {comments: "Got a really good chest pump!",
        users_id: 1,
        ratings: 5,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {comments: "I was so sore!",
        users_id: 2,
        ratings:4,
        exercise_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {comments: "My shoulders hurt. I don't really like this workout.",
        users_id: 3,
        ratings: 3,
        exercise_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {comments: "I can really feel it in my butt!! ",
        users_id: 1,
        ratings: 5,
        exercise_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {comments: "Can barely roll out of bed. Holy Sh$!$!$",
        users_id: 1,
        ratings: 5,
        exercise_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()}

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
