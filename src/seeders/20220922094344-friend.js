'use strict';

const { FRIEND_ACCEPTED, FRIEND_PENDING } = require('../config/constants');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // 1 2 7 11 19  25  26 27 28

    return queryInterface.bulkInsert('friends', [
      {
        status: FRIEND_ACCEPTED,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 1,
        accepter_id: 26,
      },
      {
        status: FRIEND_ACCEPTED,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 2,
        accepter_id: 26,
      },
      {
        status: FRIEND_ACCEPTED,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 7,
        accepter_id: 26,
      },
      {
        status: FRIEND_ACCEPTED,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 26,
        accepter_id: 11,
      },
      {
        status: FRIEND_PENDING,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 26,
        accepter_id: 19,
      },
      {
        status: FRIEND_ACCEPTED,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 26,
        accepter_id: 25,
      },
      {
        status: FRIEND_PENDING,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 28,
        accepter_id: 26,
      },
      {
        status: FRIEND_PENDING,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 29,
        accepter_id: 26,
      },
      {
        status: FRIEND_PENDING,
        created_at: new Date(),
        updated_at: new Date(),
        requester_id: 29,
        accepter_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('friends', null, {});
  },
};
