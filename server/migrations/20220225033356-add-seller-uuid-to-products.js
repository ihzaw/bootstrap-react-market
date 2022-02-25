'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'seller_uuid', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Sellers',
        key: 'seller_code'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'seller_uuid')
  }
};
