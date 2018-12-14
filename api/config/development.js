require('dotenv').config({ path: './.env.development' });

module.exports = {
    mode: 'development',
    port: process.env.PORT,
    sequelize: {
        database: 'next_js_proc',
    },
};
