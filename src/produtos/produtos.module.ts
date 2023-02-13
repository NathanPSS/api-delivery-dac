import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { DatabaseModule } from '../database/database.module';
import { produtoRepository } from './repository/produtos.repository';

import { DatabaseExeceptionsModule } from '../database/database-execeptions/database-execeptions.module';

@Module({
  imports: [DatabaseModule,DatabaseExeceptionsModule],
  controllers: [ProdutosController],
  providers: [ProdutosService,...produtoRepository]
})
export class ProdutosModule {}
