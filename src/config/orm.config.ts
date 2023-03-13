import { DataSourceOptions } from 'typeorm';

const ORMConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '456123',
  database: 'blog',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ORMConfig;
