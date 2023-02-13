import { Module } from '@nestjs/common';
import { dataBaseProviders } from './databaseProviders/database.providers';

;

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
  imports: []
})
export class DatabaseModule {}
