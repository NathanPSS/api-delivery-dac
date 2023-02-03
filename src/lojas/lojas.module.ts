import { Module } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { lojasRepository } from './repository/lojas.repository';
import { dataBaseProviders } from 'src/database/databaseProviders/database.providers';

@Module({

  controllers: [LojasController],
  providers: [LojasService,...lojasRepository,...dataBaseProviders]
})
export class LojasModule {}
