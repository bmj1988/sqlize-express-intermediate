'use strict';
const { Tree, Insect, InsectTree } = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await InsectTree.bulkCreate([{
      insectId: 2,
      treeId: 3
    },
  {
    insectId: 2,
    treeId: 4
  },
 {
  insectId: 2,
  treeId: 6,
 },
 {insectId: 2,
treeId: 7},
 {
  insectId: 3,
  treeId: 7
 }
 ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InsectTrees',
       {insectId: [2, 3]})
  }
};
