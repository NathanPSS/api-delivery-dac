import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';


export const dataBaseProviders :Array<Provider>  = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                 type: "postgres",
                 host: process.env.DATABASE_HOST,
                 port: parseInt(process.env.DATABASE_PORT,10),
                 username: process.env.DATABASE_USERNAME,
                 password: process.env.DATABASE_PASSWORD,
                 database: process.env.DATABASE_NAME,
                 entities: [
                    __dirname + '/../../**/*.entity{.ts,.js}',
                ],
                synchronize: true
            });
            return dataSource.initialize();
        },
    },
    {
        provide: 'DATA_SOURCE_TEST',
        useFactory: async () => {
            const dataSourceTest = new DataSource({
                type: "postgres",
                host: process.env.DATABASE_TEST_HOST,
                port: parseInt(process.env.DATABASE_TEST_PORT,10),
                username: process.env.DATABASE_TEST_USERNAME,
                password: process.env.DATABASE_TEST_PASSWORD,
                database: process.env.DATABASE_TEST_NAME,
                entities: [
                   __dirname + '/../../**/*.entity{.ts,.js}',
               ],
               synchronize: true
           });
           return dataSourceTest.initialize();
       },
    }

]