import {Sequelize} from "sequelize"

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: process.env.DB_PORT,
    dialect: 'postgres'
});

const connectDataBase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelize;
export { connectDataBase };