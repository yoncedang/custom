import { Sequelize } from 'sequelize';
import { SequelizeAuto } from '../Config/Config';

const { host, user, password, database, dialect, port } = SequelizeAuto

const sequelize = new Sequelize(database, user, password, {
     host: host,
     dialect: dialect,
     port: port,
});


export { sequelize };