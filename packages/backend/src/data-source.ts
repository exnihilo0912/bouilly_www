import { DataSource } from "typeorm";

import Example from './entity/Example';

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "www.db",
  synchronize: true,
  logging: true,
  entities: [Example],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))


export default AppDataSource;