import { Sequelize } from 'sequelize';
import { SequelizeAuto } from '../Config/Config';


class SequelizeClient {
     private sequelize: Sequelize;
     private SequelizeAuto: any = SequelizeAuto;

     constructor() {
          const { host, user, password, database, dialect, port } = this.SequelizeAuto
          this.sequelize = new Sequelize(database, user, password, {
               host: host,
               dialect: dialect,
               port: port,
          });
          this.connect();
     }
     private async connect(): Promise<void> {
          try {
               await this.sequelize.authenticate();
               console.log('Connection has been established successfully.');
          } catch (error: any) {
               console.error('Unable to connect to the database:', error.message);
          }
     }

}

export {
     SequelizeClient
}