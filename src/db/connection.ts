import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "cursos",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
