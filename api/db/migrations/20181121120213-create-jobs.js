module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('jobs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            reference: {
                type: Sequelize.STRING(10),
                unique: true,
            },
            start_date: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            end_date: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            contract_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    'temporaryWork',
                    'permanentContract',
                    'fixedTermContract',
                    'other',
                ),
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: queryInterface => queryInterface.dropTable('jobs'),
};
