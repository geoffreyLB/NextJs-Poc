const moment = require('moment');

const createReference = job => {
    let alphas = '';

    for (let i = 0; i < 4; ++i) {
        alphas += String.fromCharCode(65 + ((Math.random() * 100) % 26));
    }

    job.reference = moment().format('YYYYW') + alphas;
};

module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'job',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUIDV4,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            reference: {
                type: DataTypes.STRING(10),
            },
            startDate: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
            endDate: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
            contractType: {
                allowNull: false,
                type: DataTypes.ENUM(
                    'temporaryWork',
                    'permanentContract',
                    'fixedTermContract',
                    'other',
                ),
            },
            description: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
        },
        {
            hooks: {
                beforeCreate: createReference,
            },
            underscored: true,
        },
    );

    return Job;
};
