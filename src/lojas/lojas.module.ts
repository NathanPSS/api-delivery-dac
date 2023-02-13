import { Module } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { lojasRepository } from './repository/lojas.repository';
import { dataBaseProviders } from '../database/databaseProviders/database.providers';
import { AuthModule } from '../auth/auth.module';
import { AppJwtModule } from '../auth/app-jwt/app-jwt.module';
import { DatabaseExeceptionsModule } from '../database/database-execeptions/database-execeptions.module';

@Module({
  imports: [AppJwtModule,AuthModule,DatabaseExeceptionsModule],
  controllers: [LojasController],
  providers: [LojasService,...lojasRepository,...dataBaseProviders]
})
export class LojasModule {}
