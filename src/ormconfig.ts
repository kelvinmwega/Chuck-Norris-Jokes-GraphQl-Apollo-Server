import { ConnectionOptions } from "typeorm";
import { User } from "./entity/User";

const config: ConnectionOptions = {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "zaz",
  password: "user",
  database: "userdb",
  entities: [User],
  synchronize: true
};

export default config;
