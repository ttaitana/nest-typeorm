import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'nest-typeorm',
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity.js'],
};

export default config;
