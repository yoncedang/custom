import dotenv from 'dotenv';
dotenv.config();





const API_PORT = process.env.API_PORT || 3000;



const SequelizeAuto: any = {
     host: process.env.SEQUELIZE_HOST,
     port: process.env.SEQUELIZE_PORT,
     user: process.env.SEQUELIZE_USER,
     password: process.env.SEQUELIZE_PASSWORD,
     database: process.env.SEQUELIZE_DATABASE,
     dialect: process.env.SEQUELIZE_DIALECT,
}


const RedisClient: any = {
     host: process.env.REDIS_HOST,
     port: process.env.REDIS_PORT,
     password: process.env.REDIS_PASSWORD,


}


export {
     API_PORT,
     SequelizeAuto,
     RedisClient
}


